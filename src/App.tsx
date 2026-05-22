// import {Route,Routes} from "react-router"
// import { Input } from "@/components/ui/input"
// import { Button } from "./components/ui/button"
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
//   TableCaption
// } from "@/components/ui/table"
// import Home from "./Home"
// import About from "./About"
// import NavBar from "./NavBar"

import { Outlet } from "react-router"
import AdminLayout from "./layout/AdminLayout"


// import Contact from "./Contact"
const App = () => {
  return (
    <div>
      {/* <h1 className="text-3xl">Student Form </h1>
      <label htmlFor="firstName">First Name</label>
      <Input type="text" placeholder="Enter Your First name" id="firstName"/>
      
      <Button >
  Click me
</Button>
<br /><br />

  <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
      </TableBody>
    </Table> <br /> <br />


    <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-25">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>

<NavBar/> */}

      {/* Yesle Anchor link provide garxa and route provide gardinxa
<Link to="/">Home</Link>
<br />
<Link to="/about">About</Link> */}

      {/* SearchBar Ma  Search Garera herna milxa yesle */}
      {/* <Routes>
  <Route path="/" element={<Home/>}/>
   <Route path="/about" element={<About/>}/>
   <Route path="/contact" element={<Contact/>}/>
</Routes> */}



      {/* Dai le Sikaunu vako method  */}

      <div className="flex">
        <nav>
          <AdminLayout />
        </nav>

        <main className="mx-10">
          <Outlet />
        </main>

      </div>
    </div>
  )
}

export default App
