import React, { useState } from 'react';
import { Calendar, Share2, ExternalLink, Plus, Edit3, Trash2, Eye, Newspaper } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  content: string;
  date: string;
  isPublished: boolean;
  shareableLink: string;
}

const ADMIN_ID = "admin";
const ADMIN_PASS = "1234";

const UpdatesPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([
    {
      id: '1',
      title: 'મ્યુચ્યુઅલ ફંડમાં SIP ના ફાયદા',
      content: 'SIP (Systematic Investment Plan) એ મ્યુચ્યુઅલ ફંડમાં રોકાણ કરવાનો એક શ્રેષ્ઠ માર્ગ છે...',
      date: '2024-01-15',
      isPublished: true,
      shareableLink: 'https://financialservices.com/updates/sip-benefits'
    },
    {
      id: '2',
      title: 'GST રિટર્ન ફાઇલિંગ - નવા નિયમો',
      content: 'GST રિટર્ન ફાઇલિંગમાં કેટલાક નવા નિયમો લાગુ થયા છે...',
      date: '2024-01-10',
      isPublished: true,
      shareableLink: 'https://financialservices.com/updates/gst-new-rules'
    }
  ]);

  const [isAdmin, setIsAdmin] = useState<boolean>(() => localStorage.getItem('isAdmin') === 'true');
  const [loginId, setLoginId] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [loginError, setLoginError] = useState('');

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [formData, setFormData] = useState({ title: '', content: '' });

  // Login logic
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginId === ADMIN_ID && loginPass === ADMIN_PASS) {
      setIsAdmin(true);
      localStorage.setItem('isAdmin', 'true');
      setLoginError('');
      setLoginId('');
      setLoginPass('');
    } else {
      setLoginError('Wrong ID or password!');
    }
  };

  // Logout logic
  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.setItem('isAdmin', 'false');
  };

  // Article logic
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingArticle) {
      setArticles(articles.map(article =>
        article.id === editingArticle.id
          ? { ...article, title: formData.title, content: formData.content }
          : article
      ));
      setEditingArticle(null);
    } else {
      const newArticle: Article = {
        id: Date.now().toString(),
        title: formData.title,
        content: formData.content,
        date: new Date().toISOString().split('T')[0],
        isPublished: false,
        shareableLink: `https://financialservices.com/updates/${Date.now()}`
      };
      setArticles([newArticle, ...articles]);
    }
    setFormData({ title: '', content: '' });
    setShowAddForm(false);
  };

  const handleEdit = (article: Article) => {
    setEditingArticle(article);
    setFormData({ title: article.title, content: article.content });
    setShowAddForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('શું તમે આ આર્ટિકલ ડિલીટ કરવા માંગો છો?')) {
      setArticles(articles.filter(article => article.id !== id));
    }
  };

  const togglePublish = (id: string) => {
    setArticles(articles.map(article =>
      article.id === id
        ? { ...article, isPublished: !article.isPublished }
        : article
    ));
  };

  const copyShareLink = (link: string) => {
    navigator.clipboard.writeText(link);
    alert('લિંક કોપી થઈ ગઈ!');
  };

  const cancelEdit = () => {
    setEditingArticle(null);
    setFormData({ title: '', content: '' });
    setShowAddForm(false);
  };

  // Only show published articles to normal users
  const visibleArticles = isAdmin ? articles : articles.filter(a => a.isPublished);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-xl mx-auto px-2 sm:px-4 py-4 sm:py-6 lg:px-8">

        {/* Admin Login/Logout */}
        <div className="flex justify-end mb-4">
          {isAdmin ? (
            <button onClick={handleLogout} className="px-3 py-1 bg-gray-500 text-white rounded">Logout</button>
          ) : (
            <form onSubmit={handleLogin} className="flex flex-col sm:flex-row gap-2 items-end">
              <input
                type="text"
                placeholder="Admin ID"
                value={loginId}
                onChange={e => setLoginId(e.target.value)}
                className="px-3 py-1 rounded border border-gray-300"
                autoComplete="username"
              />
              <input
                type="password"
                placeholder="Password"
                value={loginPass}
                onChange={e => setLoginPass(e.target.value)}
                className="px-3 py-1 rounded border border-gray-300"
                autoComplete="current-password"
              />
              <button type="submit" className="px-3 py-1 bg-blue-500 text-white rounded">Login as Admin</button>
              {loginError && <div className="text-red-500">{loginError}</div>}
            </form>
          )}
        </div>

        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Updates & Articles</h1>
              <p className="text-gray-600">
                અહીં તમે નવા આર્ટિકલ લખી શકો છો અને લોકો સાથે શેર કરી શકો છો
              </p>
            </div>
            {isAdmin && (
              <button
                onClick={() => setShowAddForm(true)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto"
              >
                <Plus size={18} />
                <span className="hidden sm:inline">નવો આર્ટિકલ</span>
              </button>
            )}
          </div>
        </div>

        {/* Add/Edit Article Form */}
        {showAddForm && isAdmin && (
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {editingArticle ? 'આર્ટિકલ એડિટ કરો' : 'નવો આર્ટિકલ લખો'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  આર્ટિકલનું શીર્ષક *
                </label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="આર્ટિકલનું શીર્ષક લખો..."
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                  આર્ટિકલની સામગ્રી *
                </label>
                <textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  required
                  rows={8}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="આર્ટિકલની સામગ્રી લખો..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300"
                >
                  {editingArticle ? 'અપડેટ કરો' : 'સેવ કરો'}
                </button>
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-all duration-300"
                >
                  કેન્સલ
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Articles List */}
        <div className="space-y-6">
          {visibleArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-0">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{new Date(article.date).toLocaleDateString('gu-IN')}</span>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs ${
                      article.isPublished
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {article.isPublished ? 'પબ્લિશ થયેલ' : 'ડ્રાફ્ટ'}
                    </div>
                  </div>
                </div>
                {isAdmin && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(article)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="એડિટ કરો"
                    >
                      <Edit3 size={16} />
                    </button>
                    <button
                      onClick={() => togglePublish(article.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        article.isPublished
                          ? 'text-yellow-600 hover:bg-yellow-50'
                          : 'text-green-600 hover:bg-green-50'
                      }`}
                      title={article.isPublished ? 'અનપબ્લિશ કરો' : 'પબ્લિશ કરો'}
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(article.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="ડિલીટ કરો"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                )}
              </div>

              <div className="text-gray-700 mb-4">
                <p className="whitespace-pre-line">{article.content}</p>
              </div>

              {article.isPublished && (
                <div className="border-t pt-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <span className="text-sm text-gray-600">શેરેબલ લિંક:</span>
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <code className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-800 max-w-xs truncate">
                        {article.shareableLink}
                      </code>
                      <button
                        onClick={() => copyShareLink(article.shareableLink)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="લિંક કોપી કરો"
                      >
                        <Share2 size={16} />
                      </button>
                      <a
                        href={article.shareableLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                        title="લિંક ખોલો"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {visibleArticles.length === 0 && (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-gray-400 mb-4">
                <Newspaper size={48} className="mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">કોઈ આર્ટિકલ નથી</h3>
              <p className="text-gray-600 mb-4">તમારો પહેલો આર્ટિકલ લખવા માટે "નવો આર્ટિકલ" બટન દબાવો</p>
              {isAdmin && (
                <button
                  onClick={() => setShowAddForm(true)}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  પહેલો આર્ટિકલ લખો
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdatesPage;