import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Dashboard() {
  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Total Prompts: 0</p>
          <p>Recent Activity: None</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default Dashboard;