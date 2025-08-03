import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff } from "lucide-react";
import profileIcon from "@/assets/ProFile.png";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { toast } = useToast();

    // Dummy credentials
    const DUMMY_EMAIL = "user@example.com";
    const DUMMY_PASSWORD = "123";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (email === DUMMY_EMAIL && password === DUMMY_PASSWORD) {
            toast({
                title: "Login successful!",
                description: "Welcome back to your resume builder.",
            });
            navigate("/templates");
        } else {
            toast({
                title: "Invalid credentials",
                description: "Please use user@example.com and password 123",
                variant: "destructive",
            });
        }

        setIsLoading(false);
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <div className="w-full max-w-md space-y-8">
                {/* Logo */}
                <div className="text-center">
                    <img src={profileIcon} alt="Profile Logo" className="w-16 h-16 mx-auto" />
                    <p className="text-muted-foreground mt-2">Build your perfect resume</p>
                </div>

                <Card className="border-border shadow-soft">
                    <CardHeader className="space-y-1 text-center">
                        <CardTitle className="text-2xl font-semibold">Welcome back</CardTitle>
                        <CardDescription>
                            Sign in to your account to continue
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="user@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="123"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="w-full pr-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                    >
                                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" id="remember" className="rounded" />
                                    <Label htmlFor="remember" className="text-sm">Remember me</Label>
                                </div>
                                <button
                                    type="button"
                                    className="text-sm text-primary hover:underline"
                                >
                                    Forgot password?
                                </button>
                            </div>

                            <Button
                                type="submit"
                                className="w-full"
                                size="lg"
                                disabled={isLoading}
                            >
                                {isLoading ? "Signing in..." : "Sign in"}
                            </Button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-muted-foreground">
                                Don't have an account?{" "}
                                <button className="text-primary hover:underline font-medium">
                                    Sign up
                                </button>
                            </p>
                        </div>

                        {/* Demo credentials info */}
                        <div className="mt-6 p-3 bg-accent/50 rounded-md text-center">
                            <p className="text-xs text-muted-foreground">
                                <strong>Demo credentials:</strong><br />
                                Email: user@example.com<br />
                                Password: 123
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Footer */}
                <div className="text-center text-xs text-muted-foreground">
                    <p>By signing in, you agree to our Terms of Service and Privacy Policy</p>
                </div>
            </div>
        </div>
    );
};

export default Login;