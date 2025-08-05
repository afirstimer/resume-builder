import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Upload } from 'lucide-react';
import Header from '@/components/Header';

interface InsurancePeriod {
    id: string;
    status: string;
    fromMonth: string;
    fromYear: string;
    toMonth: string;
    toYear: string;
    salary: string;
}

const SocialInsuranceCalculation = () => {
    const [periods, setPeriods] = useState<InsurancePeriod[]>([
        {
            id: '1',
            status: '01',
            fromMonth: '',
            fromYear: '',
            toMonth: '',
            toYear: '',
            salary: ''
        }
    ]);
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [calculationResult, setCalculationResult] = useState<any>(null);

    const months = [
        '01', '02', '03', '04', '05', '06',
        '07', '08', '09', '10', '11', '12'
    ];

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 30 }, (_, i) => (currentYear - i).toString());

    const addPeriod = () => {
        const newPeriod: InsurancePeriod = {
            id: Date.now().toString(),
            status: String(periods.length + 1).padStart(2, '0'),
            fromMonth: '',
            fromYear: '',
            toMonth: '',
            toYear: '',
            salary: ''
        };
        setPeriods([...periods, newPeriod]);
    };

    const updatePeriod = (id: string, field: keyof InsurancePeriod, value: string) => {
        setPeriods(periods.map(period =>
            period.id === id ? { ...period, [field]: value } : period
        ));
    };

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setUploadedFile(file);
        }
    };

    const calculateSocialInsurance = () => {
        // Mock calculation logic
        const totalSalary = periods.reduce((sum, period) => {
            return sum + (parseFloat(period.salary) || 0);
        }, 0);

        const socialInsuranceRate = 0.08; // 8% rate
        const result = {
            totalContributionSalary: totalSalary,
            socialInsuranceAmount: totalSalary * socialInsuranceRate,
            totalPeriods: periods.length
        };

        setCalculationResult(result);
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <div className="p-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold text-foreground mb-8">
                        One-time Social Insurance Calculation
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Section - Input Form */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Social Insurance Information</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Tabs defaultValue="manual" className="w-full">
                                    <TabsList className="grid w-full grid-cols-2">
                                        <TabsTrigger value="manual">Manual Entry</TabsTrigger>
                                        <TabsTrigger value="upload">Image Upload</TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="manual" className="space-y-4">
                                        <div className="overflow-x-auto">
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead className="w-16">Status</TableHead>
                                                        <TableHead>Social Insurance Payment Period</TableHead>
                                                        <TableHead>Social Insurance Contribution Salary</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {periods.map((period) => (
                                                        <TableRow key={period.id}>
                                                            <TableCell>
                                                                <Input
                                                                    value={period.status}
                                                                    onChange={(e) => updatePeriod(period.id, 'status', e.target.value)}
                                                                    className="w-16"
                                                                />
                                                            </TableCell>
                                                            <TableCell>
                                                                <div className="flex items-center gap-2 flex-wrap">
                                                                    <span className="text-sm">From</span>
                                                                    <Select
                                                                        value={period.fromMonth}
                                                                        onValueChange={(value) => updatePeriod(period.id, 'fromMonth', value)}
                                                                    >
                                                                        <SelectTrigger className="w-20">
                                                                            <SelectValue placeholder="MM" />
                                                                        </SelectTrigger>
                                                                        <SelectContent>
                                                                            {months.map(month => (
                                                                                <SelectItem key={month} value={month}>{month}</SelectItem>
                                                                            ))}
                                                                        </SelectContent>
                                                                    </Select>
                                                                    <Select
                                                                        value={period.fromYear}
                                                                        onValueChange={(value) => updatePeriod(period.id, 'fromYear', value)}
                                                                    >
                                                                        <SelectTrigger className="w-24">
                                                                            <SelectValue placeholder="YYYY" />
                                                                        </SelectTrigger>
                                                                        <SelectContent>
                                                                            {years.map(year => (
                                                                                <SelectItem key={year} value={year}>{year}</SelectItem>
                                                                            ))}
                                                                        </SelectContent>
                                                                    </Select>
                                                                    <span className="text-sm">To</span>
                                                                    <Select
                                                                        value={period.toMonth}
                                                                        onValueChange={(value) => updatePeriod(period.id, 'toMonth', value)}
                                                                    >
                                                                        <SelectTrigger className="w-20">
                                                                            <SelectValue placeholder="MM" />
                                                                        </SelectTrigger>
                                                                        <SelectContent>
                                                                            {months.map(month => (
                                                                                <SelectItem key={month} value={month}>{month}</SelectItem>
                                                                            ))}
                                                                        </SelectContent>
                                                                    </Select>
                                                                    <Select
                                                                        value={period.toYear}
                                                                        onValueChange={(value) => updatePeriod(period.id, 'toYear', value)}
                                                                    >
                                                                        <SelectTrigger className="w-24">
                                                                            <SelectValue placeholder="YYYY" />
                                                                        </SelectTrigger>
                                                                        <SelectContent>
                                                                            {years.map(year => (
                                                                                <SelectItem key={year} value={year}>{year}</SelectItem>
                                                                            ))}
                                                                        </SelectContent>
                                                                    </Select>
                                                                </div>
                                                            </TableCell>
                                                            <TableCell>
                                                                <Input
                                                                    type="number"
                                                                    placeholder="Enter salary"
                                                                    value={period.salary}
                                                                    onChange={(e) => updatePeriod(period.id, 'salary', e.target.value)}
                                                                />
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </div>

                                        <Button
                                            onClick={addPeriod}
                                            variant="outline"
                                            className="w-full"
                                        >
                                            <Plus className="w-4 h-4 mr-2" />
                                            Add Period
                                        </Button>
                                    </TabsContent>

                                    <TabsContent value="upload" className="space-y-4">
                                        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                                            <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                                            <Label htmlFor="file-upload" className="cursor-pointer">
                                                <span className="text-lg font-medium">Upload Social Insurance Document</span>
                                                <p className="text-sm text-muted-foreground mt-2">
                                                    Click to upload or drag and drop your social insurance document
                                                </p>
                                            </Label>
                                            <Input
                                                id="file-upload"
                                                type="file"
                                                accept="image/*,.pdf"
                                                onChange={handleFileUpload}
                                                className="hidden"
                                            />
                                            {uploadedFile && (
                                                <p className="text-sm text-primary mt-4">
                                                    Uploaded: {uploadedFile.name}
                                                </p>
                                            )}
                                        </div>
                                    </TabsContent>
                                </Tabs>

                                <Button
                                    onClick={calculateSocialInsurance}
                                    className="w-full mt-6"
                                    size="lg"
                                >
                                    Calculate Social Insurance
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Right Section - Results */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Calculation Results</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {calculationResult ? (
                                    <div className="space-y-4">
                                        <div className="p-4 bg-muted rounded-lg">
                                            <h3 className="font-semibold text-lg mb-4">One-time Social Insurance Calculation</h3>

                                            <div className="space-y-3">
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">Total Periods:</span>
                                                    <span className="font-medium">{calculationResult.totalPeriods}</span>
                                                </div>

                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">Total Contribution Salary:</span>
                                                    <span className="font-medium">
                                                        {calculationResult.totalContributionSalary.toLocaleString()} VND
                                                    </span>
                                                </div>

                                                <div className="border-t pt-3">
                                                    <div className="flex justify-between">
                                                        <span className="text-muted-foreground">Social Insurance Rate:</span>
                                                        <span className="font-medium">8%</span>
                                                    </div>
                                                </div>

                                                <div className="border-t pt-3">
                                                    <div className="flex justify-between text-lg">
                                                        <span className="font-semibold">Total Social Insurance Amount:</span>
                                                        <span className="font-bold text-primary">
                                                            {calculationResult.socialInsuranceAmount.toLocaleString()} VND
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-xs text-muted-foreground">
                                            * This calculation is based on current social insurance rates and may vary based on actual regulations.
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center py-8">
                                        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-2xl">📊</span>
                                        </div>
                                        <p className="text-muted-foreground">
                                            Enter your social insurance information and click "Calculate Social Insurance" to see the results.
                                        </p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialInsuranceCalculation;