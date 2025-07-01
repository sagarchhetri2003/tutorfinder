const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">À propos</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Qui sommes-nous</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Nos valeurs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mentions légales</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Matières</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Arts & loisirs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Développement professionnel</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Informatique</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Ressources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Superprod Magazine</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog des Enseignants</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Assistance</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Centre d'aide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
  
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2025 TutorFinder. La meilleure façon d'apprendre.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  