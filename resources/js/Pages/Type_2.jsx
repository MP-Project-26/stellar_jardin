import Layout from "@/Layouts/Layout";
import Galery from "@/components/type_2/Galery";
import NavMid from "@/components/type_2/NavMid";
import Prieview from "@/components/type_2/Section_Prieview";


export default function Type_2({gallery}) {
//console.log(gallery)

    return (
        <Layout title="About">
            {/* container */}
            <div className="  lg:mt-10 pb-20 select-none">
            <Galery gallery={gallery}/>
            <NavMid />
            <Prieview id="overview"/>
            </div>

        </Layout>
    );
}
