import { Button } from "@/components/ui/button";
import profileLogo from "@/assets/ProFile.png";

const Header = () => {
    return (
        <header className="w-full bg-background border-b border-border">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 flex items-center justify-center">
                        <img
                            src={profileLogo}
                            alt="Profile Logo"
                            className="w-full h-auto"
                        />
                    </div>
                    <span className="text-xl font-bold text-foreground">ProFile</span>
                </div>

                <nav className="hidden md:flex items-center space-x-8">
                    <a href="/templates" className="text-muted-foreground hover:text-foreground transition-colors">
                        Templates
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        Examples
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        Pricing
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        Help
                    </a>
                </nav>

                <div className="flex items-center space-x-3">
                    <Button variant="outline" size="sm">
                        Contact us
                    </Button>
                    <a href="/login">
                        <Button variant="hero" size="sm">
                            Log in
                        </Button>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;