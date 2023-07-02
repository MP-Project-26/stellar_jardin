import Layout from "@/Layout/Layout";
import Galery from "@/components/type_2/Galery";
import NavMid from "@/components/type_2/NavMid";
import Prieview from "@/components/type_2/Section_Prieview";


export default function Type_2({galleries}) {
//console.log(gallery)

    return (
        <Layout title="About">
            {/* container */}
            <div className="  lg:mt-10 pb-20 select-none">
            <Galery galleries ={galleries}/>
            <NavMid />
            <Prieview id="overview"/>
            </div>

        </Layout>
    );
}
