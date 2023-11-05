
import React from '../../components/Contact/Contact.css'

const Contact = () => {
    return (
        <>
            <section className="py-6 bg-gray-200 text-gray-900 mt-6">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl mt-8 text-start  font-bold">Consult Your Clothing Collection With Our Experts</h1>
			
			
		</div>
		<form novalidate="" className="flex flex-col py-2 space-y-6 md:py-0 md:px-6">
			<label className="block">
				<span className="mb-2 text-lg font-bold">Full name</span>
				<input type="text" placeholder="Mufizul Islam" className="block w-full h-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-gray-100" />
			</label>
			<label className="block">
				<span className="mb-2 text-lg font-bold">Email address</span>
				<input type="email" placeholder="cse.mufizul@gmail.com.com" className="block w-full h-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-gray-100" />
			</label>
			<label className="block">
				<span className="mt-2 mb-2 text-lg font-bold">Message</span>
				<textarea rows="3" className="block w-full rounded-md focus:ring focus:ri focus:ri bg-gray-100" spellcheck="false"></textarea>
			</label>
			<button type="button" className="text-white  bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-medium px-5 py-2.5  text-center mr-2 mb-5 dark:focus:ring-yellow-900">Submit</button>
		</form>
	</div>
</section>


        </>
    );
};

export default Contact;