import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Eye, Trash2 } from "lucide-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./components/ui/table";
import { useParams } from "react-router";

const ProductDetails = () => {
  const {category} = useParams();
  return (
    <div>
      <h1 className="text-2xl">{category} Details</h1>
      <div className="mt-6 overflow-hidden rounded-xl border">
        <Table className=" border border-gray-300 border-separate border-spacing-0">
          <TableHeader>
            <TableRow>
              <TableHead className="border">S.N</TableHead>
              <TableHead className="border">Full Name</TableHead>
              <TableHead className="border">Login Name</TableHead>
              <TableHead className="border">Is Employee</TableHead>
              <TableHead className="border">Party Name</TableHead>
              <TableHead className="border">Status</TableHead>
              <TableHead className="border">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell className="border"> </TableCell>
              <TableCell className="border">
                <InputGroup className="max-w-xs">
                  <InputGroupInput placeholder="Search..." />
                  <InputGroupAddon>
                    <Search />
                  </InputGroupAddon>
                </InputGroup>
              </TableCell>
              <TableCell className="border">
                <InputGroup className="max-w-xs">
                  <InputGroupInput placeholder="Search..." />
                  <InputGroupAddon>
                    <Search />
                  </InputGroupAddon>
                </InputGroup>
              </TableCell>
              <TableCell className="border">
                <Select>
                  <SelectTrigger className="w-45">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell className="border">
                <InputGroup className="max-w-xs">
                  <InputGroupInput placeholder="Search..." />
                  <InputGroupAddon>
                    <Search />
                  </InputGroupAddon>
                </InputGroup>
              </TableCell>
              <TableCell className="border">
                <Select>
                  <SelectTrigger className="w-45">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="accepted">Accepted</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell className="border"></TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="border">1</TableCell>
              <TableCell className="border">Anisha Manandhar</TableCell>
              <TableCell className="border">anisha123</TableCell>
              <TableCell className="border">Yes</TableCell>
              <TableCell className="border">-</TableCell>
              <TableCell className="text-gray-500 border">Draft</TableCell>

              <TableCell className="flex gap-2 border">
                <button className="p-2 rounded-md bg-blue-100 text-blue-600 cursor-pointer hover:bg-blue-200">
                  <Eye size={18} />
                </button>

                <button className="p-2 rounded-md bg-red-100 text-red-600 cursor-pointer hover:bg-red-200">
                  <Trash2 size={18} />
                </button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="border">2</TableCell>
              <TableCell className="border">Sunayana Shrestha</TableCell>
              <TableCell className="border">sunayanaa_121</TableCell>
              <TableCell className="border">No</TableCell>
              <TableCell className="border">Global IME Bank</TableCell>
              <TableCell className="text-green-600 border">Approved</TableCell>

              <TableCell className="flex gap-2 border">
                <button className="p-2 rounded-md bg-blue-100 text-blue-600 cursor-pointer hover:bg-blue-200">
                  <Eye size={18} />
                </button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="border">3</TableCell>
              <TableCell className="border">Manzil Shakya</TableCell>
              <TableCell className="border">manjilshakya</TableCell>
              <TableCell className="border">Yes</TableCell>
              <TableCell className="border">-</TableCell>
              <TableCell className="text-red-500 border">Rejected</TableCell>

              <TableCell className="flex gap-2 border">
                <button className="p-2 rounded-md bg-blue-100 text-blue-600 cursor-pointer hover:bg-blue-200">
                  <Eye size={18} />
                </button>

                <button className="p-2 rounded-md bg-red-100 text-red-600 cursor-pointer hover:bg-red-200">
                  <Trash2 size={18} />
                </button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="border">4</TableCell>
              <TableCell className="border">Sulav Adhikari</TableCell>
              <TableCell className="border">sulavdai</TableCell>
              <TableCell className="border">No</TableCell>
              <TableCell className="border">Global IME Bank</TableCell>
              <TableCell className="text-yellow-500">Pending</TableCell>

              <TableCell className="flex gap-2 border">
                <button className="p-2 rounded-md bg-blue-100 text-blue-600 cursor-pointer hover:bg-blue-200">
                  <Eye size={18} />
                </button>

                <button className="p-2 rounded-md bg-red-100 text-red-600 cursor-pointer hover:bg-red-200">
                  <Trash2 size={18} />
                </button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <Pagination className="mt-5 flex justify-end">
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
    </div>
  );
};

export default ProductDetails;
