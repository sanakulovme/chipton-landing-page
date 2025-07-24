
import { ArrowRight } from 'lucide-react';

const NotFound = () => {

	return (
		<>
		  {/* ====== 404 Section Start */}
		  <section className="bg-white py-20 dark:bg-dark-2 lg:py-[110px]">
		    <div className="container mx-auto">
		      <div className="flex flex-wrap items-center -mx-4">
		        <div className="w-full px-4 md:w-5/12 lg:w-6/12">
		          <div className="text-center">
		            <img
		              src="/images/error-404.png"
		              alt="image"
		              className="max-w-full mx-auto"
		            />
		          </div>
		        </div>
		        <div className="w-full px-4 md:w-7/12 lg:w-6/12 xl:w-5/12">
		          <div>
		            <div className="mb-8">
		              <h1 className='text-primary text-5xl'>404</h1>
		            </div>
		            <h3 className="mb-5 text-2xl font-semibold text-dark dark:text-white">
		              Afsuski ushbu sahifani topa olmadik!
		            </h3>
		            <p className="mb-8 text-base text-body-color dark:text-dark-6">
		              Iltimos URL manzilga e'tibor bering yoki shunchaki quydagi tugmani bosing.
		            </p>
		            <a
		              href="/"
		              className="inline-flex gap-3 py-3 text-base font-medium text-white transition rounded-md bg-dark px-7 hover:bg-primary"
		            >
		              Bosh sahifa
		              <ArrowRight />
		            </a>
		          </div>
		        </div>
		      </div>
		    </div>
		  </section>
		  {/* ====== 404 Section End */}
		</>

	);
}

export default NotFound