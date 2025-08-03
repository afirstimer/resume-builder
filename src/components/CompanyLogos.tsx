const CompanyLogos = () => {
    const companies = [
        "Google", "Microsoft", "Apple", "Amazon", "Meta", "Netflix"
    ];

    return (
        <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <p className="text-muted-foreground text-lg">Our customers have been hired at:</p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 opacity-60">
                    {companies.map((company) => (
                        <div
                            key={company}
                            className="text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                        >
                            {company}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompanyLogos;