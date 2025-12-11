import React from 'react';
import { Download, Book as BookIcon, FileText, CheckCircle } from 'lucide-react';
import { Book } from '../types';

const BookSection: React.FC = () => {
  const books: Book[] = [
    {
      id: '1',
      title: 'Gardens of the Righteous',
      author: 'Imam An-Nawawi',
      pages: 450,
      language: 'English',
      imageUrl: 'https://picsum.photos/seed/book1/300/450',
      downloadUrl: '#'
    },
    {
      id: '2',
      title: 'Purification of the Heart',
      author: 'Hamza Yusuf (Trans.)',
      pages: 220,
      language: 'English',
      imageUrl: 'https://picsum.photos/seed/book2/300/450',
      downloadUrl: '#'
    },
    {
      id: '3',
      title: 'Forty Hadith',
      author: 'Imam An-Nawawi',
      pages: 120,
      language: 'Arabic/English',
      imageUrl: 'https://picsum.photos/seed/book3/300/450',
      downloadUrl: '#'
    },
    {
      id: '4',
      title: 'Seerah of the Prophet',
      author: 'Mubarakpuri',
      pages: 600,
      language: 'English',
      imageUrl: 'https://picsum.photos/seed/book4/300/450',
      downloadUrl: '#'
    }
  ];

  const handleDownload = (book: Book) => {
    // Generate dummy content
    const content = `
AL-FURQAN SCHOLARS ACADEMY
--------------------------
Book Title: ${book.title}
Author: ${book.author}
Language: ${book.language}
Pages: ${book.pages}

Thank you for downloading this resource from Al-Furqan Scholars Academy.

[ This is a sample text file representing the digital book content. ]

Visit us at: https://www.facebook.com/AlFurqanScholarsAcademyOfficial/
    `.trim();

    // Create blob and download link
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${book.title.replace(/\s+/g, '_').toLowerCase()}.txt`);
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section id="books" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-primary-800 font-semibold tracking-wide uppercase text-sm mb-2">Maktabah</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-syne text-gray-900">Digital Library</h3>
          </div>
          <button className="hidden md:flex items-center gap-2 text-gray-500 hover:text-primary-700 font-medium transition-colors">
            View Full Catalog <span aria-hidden="true">&rarr;</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <div key={book.id} className="group relative bg-gray-50 rounded-2xl p-4 transition-all hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 border border-transparent hover:border-gray-100">
              <div className="aspect-[2/3] w-full overflow-hidden rounded-xl bg-gray-200 mb-4 relative shadow-inner">
                <img 
                  src={book.imageUrl} 
                  alt={book.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button 
                      onClick={() => handleDownload(book)}
                      className="bg-white text-gray-900 rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 shadow-lg"
                      title="Download Book"
                    >
                        <Download size={20} />
                    </button>
                </div>
              </div>
              
              <h4 className="font-bold font-syne text-gray-900 mb-1 truncate">{book.title}</h4>
              <p className="text-sm text-gray-500 mb-3 truncate">{book.author}</p>
              
              <div className="flex items-center gap-3 text-xs text-gray-400 border-t border-gray-200 pt-3">
                <span className="flex items-center gap-1"><BookIcon size={12} /> {book.language}</span>
                <span className="flex items-center gap-1"><FileText size={12} /> {book.pages} pgs</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
            <button className="text-primary-700 font-semibold text-sm">View Full Catalog &rarr;</button>
        </div>
      </div>
    </section>
  );
};

export default BookSection;