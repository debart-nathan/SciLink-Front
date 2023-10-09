import SearchFilterMain from "./SearchFilterMain";

const Home = () => {
    const handleFromSubmit=(data:any)=>{
        console.log(data);
    }
    return (
        <main>
            <SearchFilterMain onSubmit={handleFromSubmit}/>
        </main>
    );
}

export default Home;