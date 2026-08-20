import React, { useState } from 'react';
import { X, FileCode, CheckCircle2, Copy } from 'lucide-react';

interface SitemapRobotsModalProps {
  type: 'sitemap' | 'robots' | null;
  onClose: () => void;
}

export const SitemapRobotsModal: React.FC<SitemapRobotsModalProps> = ({ type, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!type) return null;

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://optimumhealthgym.com';

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <!-- Optimum Health Gym Indore - Core 10 Routes -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/services/personal-training</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/services/weight-loss</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/services/strength-conditioning</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/services/diet-nutrition</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/pricing</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/gallery</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/faq</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;

  const robotsTxt = `# Robots.txt for Optimum Health Gym Indore
User-agent: *
Allow: /

# Disallow internal admin or drafts
Disallow: /api/private/

# Sitemap Location
Sitemap: ${baseUrl}/sitemap.xml
Host: ${baseUrl}`;

  const content = type === 'sitemap' ? sitemapXml : robotsTxt;
  const fileName = type === 'sitemap' ? 'sitemap.xml' : 'robots.txt';

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#28282B]/90 backdrop-blur-md">
      <div className="bg-[#3C3D37] border border-[#697565] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#697565]/40 bg-[#28282B]">
          <div className="flex items-center gap-2">
            <FileCode className="w-5 h-5 text-[#ECDFCC]" />
            <h3 className="font-bold text-[#ECDFCC] text-sm font-mono">{fileName} (Technical SEO)</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1 bg-[#3C3D37] hover:bg-[#3C3D37]/80 text-xs text-[#ECDFCC] border border-[#697565] rounded-md flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-[#ECDFCC]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-md text-[#697565] hover:text-[#ECDFCC] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 bg-[#28282B]">
          <pre className="text-xs text-[#ECDFCC] font-mono overflow-x-auto max-h-[60vh] p-4 bg-[#3C3D37] rounded-xl border border-[#697565]">
            <code>{content}</code>
          </pre>
        </div>

        <div className="px-6 py-3 bg-[#28282B] border-t border-[#697565]/40 text-[11px] text-[#697565] flex items-center justify-between">
          <span className="text-[#ECDFCC]/80">Schema: Structured LocalBusiness & Dynamic Sitemaps Enabled</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#3C3D37] hover:bg-[#3C3D37]/80 text-[#ECDFCC] border border-[#697565] rounded-lg text-xs font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
