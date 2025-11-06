export default async function DeleteUser(id) {
    const confirm1 = window.confirm("Are you sure you want to delete this user?");
    if (!confirm1) return;
    console.log(id);
    try {
        const url = 'http://localhost:3000/Users';
        let response = await fetch(url + "/" + id, {
            method: 'delete'
        });
        response = await response.json();
        if (response) {
            alert(" ✅ User Data Deleted Succesfully");
        }
        console.log(DeleteUser);
    }
    catch (error) {
        console.error("Delete failed:", error);
        alert("❌ Failed to delete user. Try again.");
    }
}