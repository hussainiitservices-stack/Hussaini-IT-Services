import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 text-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-2 w-10 h-10"></div>
              <div>
                <div className="text-lg font-bold text-gray-900">Hussaini IT</div>
                <div className="text-sm text-gray-500">Digital Solutions</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Building fast, responsive websites and full-stack applications for small businesses.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/services" className="hover:underline hover:text-gray-900 transition">Services</a></li>
              <li><a href="/portfolio" className="hover:underline hover:text-gray-900 transition">Portfolio</a></li>
              <li><a href="/about" className="hover:underline hover:text-gray-900 transition">About</a></li>
              <li><a href="/contact" className="hover:underline hover:text-gray-900 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-sm">Email: hello@hussainiit.com</p>
            <p className="text-sm">Phone: +91-XXXXXXXXXX</p>
            <div className="mt-4 flex items-center gap-3">
              <a aria-label="Twitter" href="#" className="text-gray-600 hover:text-blue-500 transition">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a aria-label="LinkedIn" href="#" className="text-gray-600 hover:text-blue-700 transition">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a aria-label="GitHub" href="#" className="text-gray-600 hover:text-gray-900 transition">
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Hussaini IT Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}