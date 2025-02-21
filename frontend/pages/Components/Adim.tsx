import Auth from "../components/Auth";
import PageHeading from "../components/PageHeading";

 function AdminPage() {
  return (
    <div className="flex flex-col items-stretch max-w-4xl gap-8 m-auto">
      <PageHeading>Admin</PageHeading>

      <Auth />
    </div>
  )
}

export default AdminPage