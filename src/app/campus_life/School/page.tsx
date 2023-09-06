const Academics = ()=>{
    return(
        <div className="flex h-[110vh] w-full flex-col pl-9">

            <h5 className="font-extrabold  mb-4">Admissions   &gt;   <span className="text-[#523873]">School clubs</span></h5>
            <p className="leading-[2rem]">They are several club activities around the campus. They include the “arts and design club” where all the creativity takes place, the “public speaking club” and the “debate club” where “speech meets talent”. There is also the events planning club that prepares all kinds of events that take place in the school whether entertainment related or educational based, they are in charge of all that. </p>
            <p className="leading-[2rem]">In addition to those, there is also the “media club” and “business club” and so many others all of them initiated by the students themselves and promoted by the school.</p>

            <div className=" flex flex-col md:flex-row justify-between mt-4">
                <div className="w-full md:w-[48%] rounded-lg border h-[50vh]"></div>
                <div className="w-full md:w-[48%] rounded-lg border h-[50vh]"></div>
            </div>
        </div>
    )
}
export default Academics