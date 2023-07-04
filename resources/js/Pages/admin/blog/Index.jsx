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
                    BLOG MANAGEMENT
                </h1>
                <div className="overflow-x-auto mt-5">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-green-custom">
                                <th className="text-xl font-extrabold text-white">
                                    No
                                </th>
                                <th className="text-xl font-extrabold text-white">
                                    Name
                                </th>
                                <th className="text-xl font-extrabold text-white">
                                    Job
                                </th>
                                <th className="text-xl font-extrabold text-white">
                                    Favorite Color
                                </th>
                                <th className="text-xl font-extrabold text-white">
                                    action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((res, i) => (
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>{res.name}</td>
                                    <td>{res.job}</td>
                                    <td>{res.color}</td>
                                    <td className="flex flex-row gap-2">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Edit
                                        </button>
                                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </LayoutAdmin>
    );
}
