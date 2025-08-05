import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const API_BASE = "http://localhost:5000"; // Change to your backend base URL

function getToken() {
  return localStorage.getItem("adminToken") || "";
}

const AdminDashboard = () => {
  const [section, setSection] = useState<'bookings' | 'availability'>("bookings");
  const [bookings, setBookings] = useState<any[]>([]);
  const [availability, setAvailability] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [editBooking, setEditBooking] = useState<any | null>(null);
  const [editAvailability, setEditAvailability] = useState<any | null>(null);
  const [newSlot, setNewSlot] = useState({ date: "", timeSlot: "", available: true });

  // Fetch bookings
  const fetchBookings = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_BASE}/bookings`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      const data = await res.json();
      setBookings(data);
    } catch (err) {
      setError("Failed to fetch bookings");
    }
    setLoading(false);
  };

  // Fetch availability
  const fetchAvailability = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_BASE}/availability`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      const data = await res.json();
      setAvailability(data);
    } catch (err) {
      setError("Failed to fetch availability");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (section === "bookings") fetchBookings();
    if (section === "availability") fetchAvailability();
    // eslint-disable-next-line
  }, [section]);

  // Booking actions
  const handleDeleteBooking = async (id: string) => {
    if (!window.confirm("Delete this booking?")) return;
    setLoading(true);
    try {
      await fetch(`${API_BASE}/bookings/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      fetchBookings();
    } catch {
      setError("Failed to delete booking");
    }
    setLoading(false);
  };

  const handleUpdateBooking = async () => {
    if (!editBooking) return;
    setLoading(true);
    try {
      await fetch(`${API_BASE}/bookings/${editBooking._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(editBooking),
      });
      setEditBooking(null);
      fetchBookings();
    } catch {
      setError("Failed to update booking");
    }
    setLoading(false);
  };

  // Availability actions
  const handleDeleteSlot = async (id: string) => {
    if (!window.confirm("Delete this slot?")) return;
    setLoading(true);
    try {
      await fetch(`${API_BASE}/availability/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      fetchAvailability();
    } catch {
      setError("Failed to delete slot");
    }
    setLoading(false);
  };

  const handleUpdateSlot = async () => {
    if (!editAvailability) return;
    setLoading(true);
    try {
      await fetch(`${API_BASE}/availability/${editAvailability._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(editAvailability),
      });
      setEditAvailability(null);
      fetchAvailability();
    } catch {
      setError("Failed to update slot");
    }
    setLoading(false);
  };

  const handleAddSlot = async () => {
    setLoading(true);
    try {
      await fetch(`${API_BASE}/availability`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(newSlot),
      });
      setNewSlot({ date: "", timeSlot: "", available: true });
      fetchAvailability();
    } catch {
      setError("Failed to add slot");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <Button
          variant="destructive"
          onClick={() => {
            localStorage.removeItem("isAdmin");
            localStorage.removeItem("adminToken");
            window.location.href = "/admin-login";
          }}
        >
          Logout
        </Button>
      </header>
      <nav className="bg-gray-100 p-4 flex gap-4">
        <Button
          variant={section === "bookings" ? "default" : "outline"}
          onClick={() => setSection("bookings")}
        >
          Bookings
        </Button>
        <Button
          variant={section === "availability" ? "default" : "outline"}
          onClick={() => setSection("availability")}
        >
          Availability
        </Button>
      </nav>
      <main className="flex-1 p-6">
        {loading && <div>Loading...</div>}
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {section === "bookings" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Bookings Management</h2>
            <table className="w-full border mb-6">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2">Customer</th>
                  <th className="p-2">Phone</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Time Slot</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map(b => (
                  <tr key={b._id} className="border-t">
                    <td className="p-2">{editBooking?._id === b._id ? <Input value={editBooking.customerName} onChange={e => setEditBooking({ ...editBooking, customerName: e.target.value })} /> : b.customerName}</td>
                    <td className="p-2">{editBooking?._id === b._id ? <Input value={editBooking.phone} onChange={e => setEditBooking({ ...editBooking, phone: e.target.value })} /> : b.phone}</td>
                    <td className="p-2">{editBooking?._id === b._id ? <Input value={editBooking.date} onChange={e => setEditBooking({ ...editBooking, date: e.target.value })} /> : b.date}</td>
                    <td className="p-2">{editBooking?._id === b._id ? <Input value={editBooking.timeSlot} onChange={e => setEditBooking({ ...editBooking, timeSlot: e.target.value })} /> : b.timeSlot}</td>
                    <td className="p-2">{editBooking?._id === b._id ? <Input value={editBooking.status} onChange={e => setEditBooking({ ...editBooking, status: e.target.value })} /> : b.status}</td>
                    <td className="p-2 flex gap-2">
                      {editBooking?._id === b._id ? (
                        <>
                          <Button size="sm" onClick={handleUpdateBooking}>Save</Button>
                          <Button size="sm" variant="outline" onClick={() => setEditBooking(null)}>Cancel</Button>
                        </>
                      ) : (
                        <>
                          <Button size="sm" variant="outline" onClick={() => setEditBooking(b)}>Edit</Button>
                          <Button size="sm" variant="destructive" onClick={() => handleDeleteBooking(b._id)}>Delete</Button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {section === "availability" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Availability Management</h2>
            <form className="flex gap-2 mb-6" onSubmit={e => { e.preventDefault(); handleAddSlot(); }}>
              <Input
                placeholder="Date (YYYY-MM-DD)"
                value={newSlot.date}
                onChange={e => setNewSlot({ ...newSlot, date: e.target.value })}
                required
              />
              <Input
                placeholder="Time Slot (e.g. 09:00-11:00)"
                value={newSlot.timeSlot}
                onChange={e => setNewSlot({ ...newSlot, timeSlot: e.target.value })}
                required
              />
              <Button type="submit">Add Slot</Button>
            </form>
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2">Date</th>
                  <th className="p-2">Time Slot</th>
                  <th className="p-2">Available</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {availability.map(slot => (
                  <tr key={slot._id} className="border-t">
                    <td className="p-2">{editAvailability?._id === slot._id ? <Input value={editAvailability.date} onChange={e => setEditAvailability({ ...editAvailability, date: e.target.value })} /> : slot.date}</td>
                    <td className="p-2">{editAvailability?._id === slot._id ? <Input value={editAvailability.timeSlot} onChange={e => setEditAvailability({ ...editAvailability, timeSlot: e.target.value })} /> : slot.timeSlot}</td>
                    <td className="p-2">{editAvailability?._id === slot._id ? <Input value={editAvailability.available} onChange={e => setEditAvailability({ ...editAvailability, available: e.target.value === "true" })} /> : slot.available ? "Yes" : "No"}</td>
                    <td className="p-2 flex gap-2">
                      {editAvailability?._id === slot._id ? (
                        <>
                          <Button size="sm" onClick={handleUpdateSlot}>Save</Button>
                          <Button size="sm" variant="outline" onClick={() => setEditAvailability(null)}>Cancel</Button>
                        </>
                      ) : (
                        <>
                          <Button size="sm" variant="outline" onClick={() => setEditAvailability(slot)}>Edit</Button>
                          <Button size="sm" variant="destructive" onClick={() => handleDeleteSlot(slot._id)}>Delete</Button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard; 