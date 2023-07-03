import LayoutAdmin from "@/Layouts/LayoutAdmin";

const data = [
    {
        id: 0,
        name: "tabel 0",
        job: "job 0",
        color: "red",
    },
    {
        id: 1,
        name: "tabel 1",
        job: "job 1",
        color: "red",
    },
    {
        id: 2,
        name: "tabel 2",
        job: "job 2",
        color: "red",
    },
    {
        id: 3,
        name: "tabel 3",
        job: "job 3",
        color: "red",
    },
    {
        id: 4,
        name: "tabel 4",
        job: "job 4",
        color: "red",
    },
    {
        id: 5,
        name: "tabel 5",
        job: "job 5",
        color: "red",
    },
    {
        id: 6,
        name: "tabel 6",
        job: "job 6",
        color: "red",
    },
    {
        id: 7,
        name: "tabel 7",
        job: "job 7",
        color: "red",
    },
    {
        id: 8,
        name: "tabel 8",
        job: "job 8",
        color: "red",
    },
];

export default function Index({ auth }) {
    return (
        <LayoutAdmin title="Dashboard" auth={auth}>
            <div className="w-full pt-10 justify-center items-center">
                <h1 className="font-sans font-bold text-black text-2xl md:text-3xl">
                    USER MANAGEMENT
                </h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((res, i) => (
                                <tr key={i}>
                                    <th>{res.i}</th>
                                    <td>{res.name}</td>
                                    <td>{res.job}</td>
                                    <td>{res.color}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </LayoutAdmin>
    );
}
