import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import {Search, PlusCircle} from 'lucide-react'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell, TableFooter} from "./components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { DialogClose } from "@radix-ui/react-dialog";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function App() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">

      <h1 className="text-3xl font-bold">Customer</h1>
      
      <div className="flex items-center justify-between">
        
        <form className="flex items-center gap-2">
          <Input name="name" placeholder="Name" />
          <Input name="phone" placeholder="Phone"/>
          <Button type="submit" variant="link">
            <Search className="w-4 h-4 nr-2" />
            Search
          </Button>
        </form>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="w-4 h-4 mr-2"/>
              New Customer
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>New Customer</DialogTitle>
              <DialogDescription>Add a new customer</DialogDescription>
            </DialogHeader>

            <form className="space-y-6">
              <div className="grid grid-cols-6 items-center text-right gap-3">
                <Label>Name</Label>
                <Input className="col-span-3" id="name"></Input>
              </div>
              
              <div className="grid grid-cols-6 items-center text-right gap-3">
                <Label>Phone</Label>
                <Input className="col-span-3" id="name"></Input>
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save!</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="border rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Phone</TableHead>
          </TableHeader>
          <TableBody>
              {Array.from({length: 10}).map((_,i)=>{
                return(
                <TableRow key={i}>
                  <TableCell> {i}</TableCell>
                  <TableCell> TEST</TableCell>
                  <TableCell> 41991776067</TableCell>
                </TableRow>
                )
              })}
          </TableBody>
          <TableFooter>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                    </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
          </Pagination>
          </TableFooter>
        </Table>
      </div>
    </div>
  )
}

