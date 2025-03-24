
import { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Upload } from "lucide-react";

export default function CoveredCallDashboard() {
  const [uploadedChart, setUploadedChart] = useState(null);
  const [tickerList, setTickerList] = useState("");
  const handleAnalyze = () => {
    alert(`Tickers submitted for analysis: ${tickerList}`);
  };
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-900">📊 Covered Call Strategist App</h1>
      <Card><CardContent>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">📈 Upload Chart or Tickers</h2>
          <Input type="file" onChange={(e) => setUploadedChart(URL.createObjectURL(e.target.files[0]))} />
          {uploadedChart && <img src={uploadedChart} alt="Uploaded Chart" className="mt-4 max-h-64 border rounded" />}
        </div>
        <textarea
          className="border p-2 w-full text-sm rounded"
          rows={4}
          placeholder="Enter tickers for analysis, e.g. INTC, AMD, TSLA"
          value={tickerList}
          onChange={(e) => setTickerList(e.target.value)}
        />
        <Button className="mt-2" onClick={handleAnalyze}>🔍 Analyze</Button>
      </CardContent></Card>
    </div>
  );
}
