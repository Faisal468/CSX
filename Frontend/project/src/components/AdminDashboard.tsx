import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { 
  Users, 
  MessageSquare, 
  FileText, 
  LogOut, 
  Edit, 
  Trash, 
  Eye, 
  Check,
  BarChart
} from 'lucide-react';
import axios from 'axios';

interface Contact {
  _id: string;
  fullName: string;
  email: string;
  company: string;
  serviceInterested: string;
  projectDetails: string;
  createdAt: string;
  status?: 'new' | 'in-progress' | 'completed';
}

interface BlogPost {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  published: boolean;
  imageUrl?: string;
}

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [stats, setStats] = useState({
    totalContacts: 0,
    newContacts: 0,
    totalBlogs: 0,
    publishedBlogs: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // New blog form state
  const [newBlog, setNewBlog] = useState<Omit<BlogPost, 'id' | 'date'>>({
    title: '',
    content: '',
    excerpt: '',
    author: 'CloudSphereX Team',
    published: false,
    imageUrl: ''
  });
  
  // Edit blog state
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  
  // Check authentication and fetch data
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuth') === 'true';
    if (!isAuthenticated) {
      navigate('/admin');
      return;
    }
    
    // Fetch contacts from MongoDB via API
    const fetchContacts = async () => {
      try {
        setLoading(true);
        const apiKey = localStorage.getItem('adminApiKey');
        
        if (!apiKey) {
          throw new Error('API key not found. Please log in again.');
        }
        
        // Call your existing API endpoint with the API key
        const response = await axios.get('/api/contact', {
          headers: {
            'x-api-key': apiKey
          }
        });
        
        if (response.data.success) {
          setContacts(response.data.data);
          
          // Load blogs from localStorage (keeping this as is for now)
          const storedBlogs = JSON.parse(localStorage.getItem('blogPosts') || '[]');
          setBlogPosts(storedBlogs);
          
          // Calculate stats
          const now = new Date();
          const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          
          setStats({
            totalContacts: response.data.count,
            newContacts: response.data.data.filter((contact: Contact) => 
              new Date(contact.createdAt) > oneWeekAgo
            ).length,
            totalBlogs: storedBlogs.length,
            publishedBlogs: storedBlogs.filter((blog: BlogPost) => blog.published).length
          });
        } else {
          throw new Error('Failed to fetch contacts');
        }
        
        setLoading(false);
      } catch (err: unknown) {
        console.error('Error fetching contacts:', err);
        setError(err instanceof Error ? err.message : 'Failed to load contact data. Please try again later.');
        setLoading(false);
      }
    };
    
    fetchContacts();
  }, [navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    localStorage.removeItem('adminApiKey');
    navigate('/admin');
  };
  
  const markAsRead = async (id: string) => {
    try {
      const apiKey = localStorage.getItem('adminApiKey');
      
      // Update in the database via API
      await axios.put(`/api/contact/${id}`, 
        { status: 'in-progress' }, 
        {
          headers: {
            'x-api-key': apiKey
          }
        }
      );
      
      // Update local state
      const updatedContacts = contacts.map(contact => 
        contact._id === id ? { ...contact, status: 'in-progress' as const } : contact
      );
      setContacts(updatedContacts);
    } catch (err) {
      console.error('Error marking contact as read:', err);
      setError('Failed to update contact status. Please try again.');
    }
  };
  
  const deleteContact = async (id: string) => {
    try {
      const apiKey = localStorage.getItem('adminApiKey');
      
      // Delete from the database via API
      await axios.delete(`/api/contact/${id}`, {
        headers: {
          'x-api-key': apiKey
        }
      });
      
      // Update local state
      const updatedContacts = contacts.filter(contact => contact._id !== id);
      setContacts(updatedContacts);
      
      // Update stats
      setStats(prev => ({
        ...prev,
        totalContacts: prev.totalContacts - 1
      }));
    } catch (err) {
      console.error('Error deleting contact:', err);
      setError('Failed to delete contact. Please try again.');
    }
  };
  
  const handleBlogInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (editingBlog) {
      setEditingBlog({
        ...editingBlog,
        [name]: value
      });
    } else {
      setNewBlog({
        ...newBlog,
        [name]: value
      });
    }
  };
  
  const handleBlogCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (editingBlog) {
      setEditingBlog({
        ...editingBlog,
        [name]: checked
      });
    } else {
      setNewBlog({
        ...newBlog,
        [name]: checked
      });
    }
  };
  
  const saveBlog = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingBlog) {
      // Update existing blog
      const updatedBlogs = blogPosts.map(blog => 
        blog.id === editingBlog.id ? editingBlog : blog
      );
      setBlogPosts(updatedBlogs);
      localStorage.setItem('blogPosts', JSON.stringify(updatedBlogs));
      setEditingBlog(null);
    } else {
      // Add new blog
      const newBlogWithId = {
        ...newBlog,
        id: Date.now(),
        date: new Date().toISOString()
      };
      const updatedBlogs = [...blogPosts, newBlogWithId];
      setBlogPosts(updatedBlogs);
      localStorage.setItem('blogPosts', JSON.stringify(updatedBlogs));
      setNewBlog({
        title: '',
        content: '',
        excerpt: '',
        author: 'CloudSphereX Team',
        published: false,
        imageUrl: ''
      });
    }
  };
  
  const deleteBlog = (id: number) => {
    const updatedBlogs = blogPosts.filter(blog => blog.id !== id);
    setBlogPosts(updatedBlogs);
    localStorage.setItem('blogPosts', JSON.stringify(updatedBlogs));
  };
  
  const togglePublishBlog = (id: number) => {
    const updatedBlogs = blogPosts.map(blog => 
      blog.id === id ? { ...blog, published: !blog.published } : blog
    );
    setBlogPosts(updatedBlogs);
    localStorage.setItem('blogPosts', JSON.stringify(updatedBlogs));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading dashboard data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="bg-red-900/20 border border-red-500 rounded-lg p-6 max-w-md">
          <h2 className="text-red-400 text-xl font-bold mb-2">Error</h2>
          <p className="text-white">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">CloudSphereX Admin</h1>
          <button 
            onClick={handleLogout}
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </header>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Inquiries</p>
                <h3 className="text-3xl font-bold text-white mt-1">{stats.totalContacts}</h3>
              </div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-blue-400" />
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">New This Week</p>
                <h3 className="text-3xl font-bold text-white mt-1">{stats.newContacts}</h3>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-green-400" />
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Blog Posts</p>
                <h3 className="text-3xl font-bold text-white mt-1">{stats.totalBlogs}</h3>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Published Posts</p>
                <h3 className="text-3xl font-bold text-white mt-1">{stats.publishedBlogs}</h3>
              </div>
              <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                <BarChart className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <Tabs defaultValue="contacts" className="w-full">
          <TabsList className="bg-gray-800 border border-gray-700 rounded-xl p-1 mb-6">
            <TabsTrigger value="contacts" className="data-[state=active]:bg-gray-700 data-[state=active]:text-white text-gray-400 py-2 px-4 rounded-lg">
              Contact Inquiries
            </TabsTrigger>
            <TabsTrigger value="blogs" className="data-[state=active]:bg-gray-700 data-[state=active]:text-white text-gray-400 py-2 px-4 rounded-lg">
              Blog Management
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="contacts" className="mt-6">
            <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-900">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Service</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {contacts.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="px-6 py-4 text-center text-gray-400">
                          No contact inquiries yet
                        </td>
                      </tr>
                    ) : (
                      contacts.map((contact) => (
                        <tr key={contact._id} className={!contact.status || contact.status === 'new' ? 'bg-blue-900/10' : ''}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-white">{contact.fullName}</div>
                            {contact.company && (
                              <div className="text-xs text-gray-400">{contact.company}</div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            {contact.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            {contact.serviceInterested || 'Not specified'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            {new Date(contact.createdAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              !contact.status || contact.status === 'new' 
                                ? 'bg-blue-100 text-blue-800' 
                                : contact.status === 'in-progress'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-green-100 text-green-800'
                            }`}>
                              {!contact.status || contact.status === 'new' 
                                ? 'New' 
                                : contact.status === 'in-progress'
                                ? 'In Progress'
                                : 'Completed'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex justify-end space-x-2">
                              {(!contact.status || contact.status === 'new') && (
                                <button
                                  onClick={() => markAsRead(contact._id)}
                                  className="text-blue-400 hover:text-blue-300"
                                  title="Mark as in progress"
                                >
                                  <Check className="w-5 h-5" />
                                </button>
                              )}
                              <button
                                onClick={() => {
                                  alert(`Message from ${contact.fullName}:\n\n${contact.projectDetails}`);
                                }}
                                className="text-gray-400 hover:text-gray-300"
                                title="View message"
                              >
                                <Eye className="w-5 h-5" />
                              </button>
                              <button
                                onClick={() => deleteContact(contact._id)}
                                className="text-red-400 hover:text-red-300"
                                title="Delete"
                              >
                                <Trash className="w-5 h-5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="blogs" className="mt-6 space-y-6">
            {/* Blog Form */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                {editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
              </h2>
              
              <form onSubmit={saveBlog} className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">
                    Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={editingBlog ? editingBlog.title : newBlog.title}
                    onChange={handleBlogInputChange}
                    required
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Blog post title"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="author" className="block text-sm font-medium text-gray-300 mb-1">
                      Author
                    </label>
                    <input
                      type="text"
                      id="author"
                      name="author"
                      value={editingBlog ? editingBlog.author : newBlog.author}
                      onChange={handleBlogInputChange}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      placeholder="Author name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-300 mb-1">
                      Featured Image URL
                    </label>
                    <input
                      type="text"
                      id="imageUrl"
                      name="imageUrl"
                      value={editingBlog ? editingBlog.imageUrl || '' : newBlog.imageUrl || ''}
                      onChange={handleBlogInputChange}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="excerpt" className="block text-sm font-medium text-gray-300 mb-1">
                    Excerpt *
                  </label>
                  <input
                    type="text"
                    id="excerpt"
                    name="excerpt"
                    value={editingBlog ? editingBlog.excerpt : newBlog.excerpt}
                    onChange={handleBlogInputChange}
                    required
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Brief summary of the blog post"
                  />
                </div>
                
                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-1">
                    Content *
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    value={editingBlog ? editingBlog.content : newBlog.content}
                    onChange={handleBlogInputChange}
                    required
                    rows={8}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Blog post content (supports markdown)"
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="published"
                    name="published"
                    checked={editingBlog ? editingBlog.published : newBlog.published}
                    onChange={handleBlogCheckboxChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded"
                  />
                  <label htmlFor="published" className="ml-2 block text-sm text-gray-300">
                    Publish immediately
                  </label>
                </div>
                
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    {editingBlog ? 'Update Post' : 'Create Post'}
                  </button>
                  
                  {editingBlog && (
                    <button
                      type="button"
                      onClick={() => setEditingBlog(null)}
                      className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>
            
            {/* Blog List */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-700 flex justify-between items-center">
                <h3 className="text-lg font-medium text-white">Blog Posts</h3>
                <span className="text-sm text-gray-400">{blogPosts.length} posts</span>
              </div>
              
              <div className="divide-y divide-gray-700">
                {blogPosts.length === 0 ? (
                  <div className="px-6 py-4 text-center text-gray-400">
                    No blog posts yet. Create your first post above.
                  </div>
                ) : (
                  blogPosts.map((blog) => (
                    <div key={blog.id} className="px-6 py-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-medium text-white flex items-center">
                            {blog.title}
                            {blog.published ? (
                              <span className="ml-2 px-2 py-0.5 text-xs bg-green-100 text-green-800 rounded-full">
                                Published
                              </span>
                            ) : (
                              <span className="ml-2 px-2 py-0.5 text-xs bg-gray-100 text-gray-800 rounded-full">
                                Draft
                              </span>
                            )}
                          </h4>
                          <p className="text-sm text-gray-400 mt-1">
                            By {blog.author} • {new Date(blog.date).toLocaleDateString()}
                          </p>
                          <p className="text-gray-300 mt-2">{blog.excerpt}</p>
                        </div>
                        
                        <div className="flex space-x-2">
                          <button
                            onClick={() => togglePublishBlog(blog.id)}
                            className={`text-sm px-3 py-1 rounded-lg ${
                              blog.published
                                ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                                : 'bg-green-100 text-green-800 hover:bg-green-200'
                            }`}
                          >
                            {blog.published ? 'Unpublish' : 'Publish'}
                          </button>
                          <button
                            onClick={() => setEditingBlog(blog)}
                            className="text-blue-400 hover:text-blue-300"
                          >
                            <Edit className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => deleteBlog(blog.id)}
                            className="text-red-400 hover:text-red-300"
                          >
                            <Trash className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;