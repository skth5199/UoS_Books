import Para from "../../components/paragrapgh/para";
import Nav from "../../components/navBar/navBar";
import Footer from "../../components/footer/footer";
import "./addBook.css";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
function Addbook(props) {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/books");
  };

  return (
    <>
      <Nav />
      <div className="add-book-hero-image"></div>
      <div className="flex justify-center pt-10 pb-12 ">
        <div className="w-11/12  xl:w-4/5 2xl:w-2/5">
          <div className="pt-5">
            <div className="text-center w-full text-2xl font-medium">
              <Para text="How it works?" />
            </div>
            <div className="text-center pt-3 text-gray-500">
              <Para text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-6 lg:pt-10 xl:pt-10 2xl:pt-10 pb-12 ">
        <div className="w-11/12  xl:w-4/5 2xl:w-2/5">
          <form className="flex justify-center" onSubmit={handleSubmit}>
            <div className="w-full ">
              <div className="w-4/5 pt-4">
                <div className="flex flex-col">
                  <div className="pb-3 text-xl font-semibold">
                    <Para text="Add Book" />
                  </div>
                  <p className="font-bold text-sm pb-1  ">Select cover</p>
                </div>
                <div className="flex ">
                  <input
                    type="file"
                    id="img"
                    name="img"
                    accept="image/*"
                    required
                    className="focus:outline-none w-full "
                  />
                </div>
              </div>
              <div className="flex justify-between items-center pt-4">
                <div className="w-2/5">
                  <input
                    type="text"
                    placeholder="Book Name"
                    required
                    className="w-full border rounded-full bg-gray-100 border-gray-200 border-opacity-30 focus:outline-none focus:ring-1 focus:ring-blue-600  bg-transparent pt-2 pb-2 pl-2 outline-none text-black text-base"
                  />
                </div>
                <div className="w-2/5">
                  <input
                    type="text"
                    placeholder="Author Name"
                    required
                    className="w-full border rounded-full bg-gray-100 border-gray-200 border-opacity-30 focus:outline-none focus:ring-1 focus:ring-blue-600  bg-transparent pt-2 pb-2 pl-2 outline-none text-black text-base"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-full pt-4">
                  <textarea
                    id="w3review"
                    name="w3review"
                    rows="7"
                    className="resize-none w-full outline-none pl-2 pt-2 bg-gray-100 border-gray-200 border-opacity-30 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="Write Cooking Process..."
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-center pt-4">
                <button className="bg-gray-900 hover:text-blue-500 border border-transparent hover:border-blue-500 rounded-full text-white text-sm pr-4 pl-4 pt-2 pb-2 focus:outline-none ">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Addbook;
