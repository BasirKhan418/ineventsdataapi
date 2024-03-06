const NEXT_PUBLIC_HOST = "https://innovateu.org.in";
const getalleventsdata = async()=>{
    const data = { status: "get" };
    const res = await fetch(
      `${NEXT_PUBLIC_HOST}/api/admin/Add/addevent`,
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const result = await res.json();
    return result;
}
export default getalleventsdata;
