import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Plus } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface PromoData {
  id: string;
  campaignName: string;
  promoId: string;
  promoDetails: string;
  promoIsCircle: boolean;
  campaignVersion: string;
  promoStartDate: string;
  promoEndDate: string;
  createdBy: string;
  promoStatus: "Live" | "Ended" | "Error";
  tcins: string[];
  accountName: string;
}

interface PromoList {
  id: string;
  name: string;
  promos: PromoData[];
}

const dummyPromos: PromoData[] = [
  {
    id: "1",
    campaignName: "Cover page",
    promoId: "18",
    promoDetails: "Cover page",
    promoIsCircle: false,
    campaignVersion: "V3",
    promoStartDate: "2024-01-01",
    promoEndDate: "2024-03-31",
    createdBy: "Eddie Lake",
    promoStatus: "Live",
    tcins: ["12345", "67890"],
    accountName: "Target"
  },
  {
    id: "2",
    campaignName: "Table of contents",
    promoId: "29",
    promoDetails: "Table of contents",
    promoIsCircle: true,
    campaignVersion: "V2",
    promoStartDate: "2024-02-01",
    promoEndDate: "2024-04-30",
    createdBy: "Eddie Lake",
    promoStatus: "Live",
    tcins: ["54321", "09876"],
    accountName: "Walmart"
  },
  {
    id: "3",
    campaignName: "Executive summary",
    promoId: "10",
    promoDetails: "Narrative",
    promoIsCircle: false,
    campaignVersion: "V1",
    promoStartDate: "2024-01-15",
    promoEndDate: "2024-03-15",
    createdBy: "Eddie Lake",
    promoStatus: "Ended",
    tcins: ["11111"],
    accountName: "Amazon"
  }
];

export default function PromoValidation() {
  const [promos, setPromos] = useState<PromoData[]>(dummyPromos);
  const [lists, setLists] = useState<PromoList[]>([
    { id: "outline", name: "Outline", promos: [] },
    { id: "past-performance", name: "Past Performance", promos: [] }
  ]);
  const [activeTab, setActiveTab] = useState("outline");
  const [isAddToListOpen, setIsAddToListOpen] = useState(false);
  const [selectedPromo, setSelectedPromo] = useState<PromoData | null>(null);
  const [newListName, setNewListName] = useState("");

  const handleCellEdit = (id: string, field: keyof PromoData, value: any) => {
    setPromos(promos.map(promo => 
      promo.id === id ? { ...promo, [field]: value } : promo
    ));
  };

  const handleAddToList = (promo: PromoData) => {
    setSelectedPromo(promo);
    setIsAddToListOpen(true);
  };

  const addPromoToList = (listId: string) => {
    if (!selectedPromo) return;
    
    setLists(lists.map(list => 
      list.id === listId 
        ? { ...list, promos: [...list.promos, selectedPromo] }
        : list
    ));
    setIsAddToListOpen(false);
    setSelectedPromo(null);
  };

  const createNewList = () => {
    if (!newListName.trim() || !selectedPromo) return;
    
    const newList: PromoList = {
      id: newListName.toLowerCase().replace(/\s+/g, '-'),
      name: newListName,
      promos: [selectedPromo]
    };
    
    setLists([...lists, newList]);
    setActiveTab(newList.id);
    setNewListName("");
    setIsAddToListOpen(false);
    setSelectedPromo(null);
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      Live: "bg-green-500 text-white",
      Ended: "bg-gray-500 text-white",
      Error: "bg-red-500 text-white"
    };
    return variants[status as keyof typeof variants] || "bg-gray-500 text-white";
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Promo Validation</h1>
          <p className="text-muted-foreground">Manage and validate promotional campaigns</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Customize Columns
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Section
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-fit grid-cols-auto gap-1 h-10">
          {lists.map((list) => (
            <TabsTrigger key={list.id} value={list.id} className="px-4">
              {list.name} {list.promos.length > 0 && <span className="ml-1 text-xs bg-primary text-primary-foreground rounded-full px-2">{list.promos.length}</span>}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="outline" className="mt-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">Promo Validation Data</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Campaign Name</TableHead>
                      <TableHead>Promo ID</TableHead>
                      <TableHead>Promo Details</TableHead>
                      <TableHead>Circle Promo</TableHead>
                      <TableHead>Version</TableHead>
                      <TableHead>Start Date</TableHead>
                      <TableHead>End Date</TableHead>
                      <TableHead>Created By</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>TCINs</TableHead>
                      <TableHead>Account</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {promos.map((promo) => (
                      <TableRow key={promo.id}>
                        <TableCell>
                          <Input
                            value={promo.campaignName}
                            onChange={(e) => handleCellEdit(promo.id, 'campaignName', e.target.value)}
                            className="border-0 bg-transparent p-0 h-auto focus:ring-1"
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            value={promo.promoId}
                            onChange={(e) => handleCellEdit(promo.id, 'promoId', e.target.value)}
                            className="border-0 bg-transparent p-0 h-auto focus:ring-1"
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            value={promo.promoDetails}
                            onChange={(e) => handleCellEdit(promo.id, 'promoDetails', e.target.value)}
                            className="border-0 bg-transparent p-0 h-auto focus:ring-1"
                          />
                        </TableCell>
                        <TableCell>
                          <Select
                            value={promo.promoIsCircle ? "yes" : "no"}
                            onValueChange={(value) => handleCellEdit(promo.id, 'promoIsCircle', value === "yes")}
                          >
                            <SelectTrigger className="border-0 bg-transparent p-0 h-auto focus:ring-1">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <Input
                            value={promo.campaignVersion}
                            onChange={(e) => handleCellEdit(promo.id, 'campaignVersion', e.target.value)}
                            className="border-0 bg-transparent p-0 h-auto focus:ring-1"
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            type="date"
                            value={promo.promoStartDate}
                            onChange={(e) => handleCellEdit(promo.id, 'promoStartDate', e.target.value)}
                            className="border-0 bg-transparent p-0 h-auto focus:ring-1"
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            type="date"
                            value={promo.promoEndDate}
                            onChange={(e) => handleCellEdit(promo.id, 'promoEndDate', e.target.value)}
                            className="border-0 bg-transparent p-0 h-auto focus:ring-1"
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            value={promo.createdBy}
                            onChange={(e) => handleCellEdit(promo.id, 'createdBy', e.target.value)}
                            className="border-0 bg-transparent p-0 h-auto focus:ring-1"
                          />
                        </TableCell>
                        <TableCell>
                          <Select
                            value={promo.promoStatus}
                            onValueChange={(value) => handleCellEdit(promo.id, 'promoStatus', value)}
                          >
                            <SelectTrigger className="border-0 bg-transparent p-0 h-auto focus:ring-1">
                              <Badge className={getStatusBadge(promo.promoStatus)}>
                                {promo.promoStatus}
                              </Badge>
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Live">Live</SelectItem>
                              <SelectItem value="Ended">Ended</SelectItem>
                              <SelectItem value="Error">Error</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {promo.tcins.map((tcin, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {tcin}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Input
                            value={promo.accountName}
                            onChange={(e) => handleCellEdit(promo.id, 'accountName', e.target.value)}
                            className="border-0 bg-transparent p-0 h-auto focus:ring-1"
                          />
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem onClick={() => handleAddToList(promo)}>
                                Add to List
                              </DropdownMenuItem>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Make a copy</DropdownMenuItem>
                              <DropdownMenuItem>Favorite</DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
                <span>0 of 68 row(s) selected.</span>
                <div className="flex items-center gap-4">
                  <span>Rows per page</span>
                  <Select defaultValue="10">
                    <SelectTrigger className="w-16">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="25">25</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                    </SelectContent>
                  </Select>
                  <span>Page 1 of 7</span>
                  <div className="flex gap-1">
                    <Button variant="outline" size="sm">←</Button>
                    <Button variant="outline" size="sm">→</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {lists.filter(list => list.id !== "outline").map((list) => (
          <TabsContent key={list.id} value={list.id} className="mt-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">{list.name} List</CardTitle>
              </CardHeader>
              <CardContent>
                {list.promos.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    No promos added to this list yet.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {list.promos.map((promo) => (
                      <div key={promo.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div>
                          <h3 className="font-medium">{promo.campaignName}</h3>
                          <p className="text-sm text-muted-foreground">
                            Promo ID: {promo.promoId} | Status: {promo.promoStatus}
                          </p>
                        </div>
                        <Badge className={getStatusBadge(promo.promoStatus)}>
                          {promo.promoStatus}
                        </Badge>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <Dialog open={isAddToListOpen} onOpenChange={setIsAddToListOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add to List</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Existing Lists</h4>
              <div className="space-y-2">
                {lists.filter(list => list.id !== "outline").map((list) => (
                  <Button
                    key={list.id}
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => addPromoToList(list.id)}
                  >
                    {list.name} ({list.promos.length} items)
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Create New List</h4>
              <div className="flex gap-2">
                <Input
                  placeholder="List name"
                  value={newListName}
                  onChange={(e) => setNewListName(e.target.value)}
                />
                <Button onClick={createNewList}>Create</Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}