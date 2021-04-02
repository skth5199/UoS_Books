import Card from "../../components/card/card";
import Para from "../../components/paragrapgh/para";
import Book from "../../assets/images/book-1.jpg";
import Book2 from "../../assets/images/300-questions.jpg";
import Chatboot from "../../components/chatbot/chatbot";
import Nav from "../../components/navBar/navBar";
import Search from "../../components/searchBook/searchBook";
import Footer from "../../components/footer/footer";
// import 'bootstrap/dist/css/bootstrap.min.css'
import Button from '@material-ui/core/Button'
import "./book.css";
function Books() {
  const handleBuy = ()=> {
    console.log("buy button clicked")
  }
  return (
    <>
      <Nav />
      <div className="books-list-hero-image">
        <div className="w-full lg:w-3/5 xl:w-3/5 2xl:w-3/5 ">
          <div className="w-full  text-center text-white text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl  font-semibold pb-4">
            <Para text="Buy and Sell Books" />
          </div>
          <div className="flex justify-center  pb-4 pt-2 lg:pt-4 xl:pt-4 2xl:pt-4" >
          <div className="w-11/12  xl:w-4/5 2xl:w-2/5">
          <div className="w-full flex ">
            <Search />
          </div>
          </div>
          </div>
        </div>
      </div>
      {/* About and how it work */}
      <div id="about" className="pb-4"></div>
      <div className="flex justify-center pt-10 pb-12" >
        <div className="w-11/12  xl:w-4/5 2xl:w-2/5">
          <div>
            <div className="text-center w-full text-2xl font-medium">
              <Para text="About" />
            </div>
            <div className="text-center pt-3 text-gray-500">
              <Para text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            </div>
          </div>
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
      {/* About and how it work ends */}
      <div className="flex justify-center pt-10 pb-12">
        <div className="w-11/12  xl:w-4/5 2xl:w-2/5">
          <div className="flex flex-col  lg:flex-row xl:flex-row 2xl:flex-row justify-between">
            {/* single book card full width */}
            <div className="book-card mb-4 lg:mb-0 xl:mb-0 2xl:mb-0 w-full lg:w-1/6 xl:w-1/6 2xl:w-1/6 relative bg-gray-200 cursor-pointer">
              <Card src={Book} heading="Book Name" />
              <div className="description hidden absolute p-4  top-0 bottom-0 bg-gray-900 bg-opacity-90 text-white">
                <div className="flex w-full h-full justify-center items-center">
                  <div>
                    <div className="w-full text-center text-xl">
                      <Para text="Book Name" />
                    </div>
                    <div className="w-full text-center text-sm">
                      <Para text="By:Author Name" />
                    </div>
                    <div className="text-sm pt-2">
                      <Para text="Some description about the book will be added here" />
                    </div>
                    <div>
                      <Button variant="contained" style={{width:"100%", marginTop: "3em"}} color="primary" onClick={handleBuy}  size="medium">Buy Book</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* single book card full width end */}

            {/* single book card full width */}
            <div className="book-card mb-4 lg:mb-0 xl:mb-0 2xl:mb-0 w-full lg:w-1/6 xl:w-1/6 2xl:w-1/6 relative bg-gray-200 cursor-pointer">
              <Card src={Book} heading="Book Name" />
              <div className="description hidden absolute p-4  top-0 bottom-0 bg-gray-900 bg-opacity-90 text-white">
                <div className="flex w-full h-full justify-center items-center">
                  <div>
                    <div className="w-full text-center text-xl">
                      <Para text="Book Name" />
                    </div>
                    <div className="w-full text-center text-sm">
                      <Para text="By:Author Name" />
                    </div>
                    <div className="text-sm pt-2">
                      <Para text="Some description about the book will be added here" />
                    </div>
                    <div>
                      <Button variant="contained" style={{width:"100%", marginTop: "3em"}} color="primary" onClick={handleBuy}  size="medium">Buy Book</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* single book card full width end */}
            {/* single book card full width */}
            <div className="book-card w-full mb-4 lg:mb-0 xl:mb-0 2xl:mb-0 lg:w-1/6 xl:w-1/6 2xl:w-1/6 relative bg-gray-200 cursor-pointer">
              <Card src={Book2} heading="Book Name" />
              <div className="description hidden absolute p-4  top-0 bottom-0 bg-gray-900 bg-opacity-90 text-white">
                <div className="flex w-full h-full justify-center items-center">
                  <div>
                    <div className="w-full text-center text-xl">
                      <Para text="Book Name" />
                    </div>
                    <div className="w-full text-center text-sm">
                      <Para text="By:Author Name" />
                    </div>
                    <div className="text-sm pt-2">
                      <Para text="Some description about the book will be added here" />
                    </div>
                    <div>
                      <Button variant="contained" style={{width:"100%", marginTop: "3em"}} color="primary" onClick={handleBuy}  size="medium">Buy Book</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* single book card full width end */}
            {/* single book card full width */}
            <div className="book-card w-full mb-4 lg:mb-0 xl:mb-0 2xl:mb-0 lg:w-1/6 xl:w-1/6 2xl:w-1/6 relative bg-gray-200 cursor-pointer">
              <Card src={Book} heading="Book Name" />
              <div className="description hidden absolute p-4  top-0 bottom-0 bg-gray-900 bg-opacity-95 text-white">
                <div className="flex w-full h-full justify-center items-center">
                  <div>
                    <div className="w-full text-center text-xl">
                      <Para text="Book Name" />
                    </div>
                    <div className="w-full text-center text-sm">
                      <Para text="By:Author Name" />
                    </div>
                    <div className="text-sm pt-2">
                      <Para text="Some description about the book will be added here" />
                    </div>
                    <div>
                      <Button variant="contained" style={{width:"100%", marginTop: "3em"}} color="primary" onClick={handleBuy}  size="medium">Buy Book</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* single book card full width end */}
            {/* single book card full width */}
            <div className="book-card mb-4 lg:mb-0 xl:mb-0 2xl:mb-0 w-full lg:w-1/6 xl:w-1/6 2xl:w-1/6 relative bg-gray-200 cursor-pointer">
              <Card src={Book2} heading="Book Name" />
              <div className="description hidden absolute p-4  top-0 bottom-0 bg-gray-900 bg-opacity-90 text-white">
                <div className="flex w-full h-full justify-center items-center">
                  <div>
                    <div className="w-full text-center text-xl">
                      <Para text="Book Name" />
                    </div>
                    <div className="w-full text-center text-sm">
                      <Para text="By:Author Name" />
                    </div>
                    <div className="text-sm pt-2">
                      <Para text="Some description about the book will be added here" />
                    </div>
                    <div>
                      <Button variant="contained" style={{width:"100%", marginTop: "3em"}} color="primary" onClick={handleBuy}  size="medium">Buy Book</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* single book card full width end */}
          </div>
        </div>
      </div>
      {/* first Row of books ends */}
      {/* second Row of books */}
      <div className="lib-book-bg flex  justify-center pt-10 pb-10">
        <div className="w-11/12  xl:w-4/5 2xl:w-2/5">
          <div className="flex flex-col  lg:flex-row xl:flex-row 2xl:flex-row  justify-between">
            {/* single book card full width */}
            <div className="book-card w-full lg:w-3/12 xl:w-3/12 2xl:w-3/12 mb-4 lg:mb-0 xl:mb-0 2xl:mb-0 relative bg-white cursor-pointer">
              <Card src={Book} heading="Book Name" />
              <div className="description hidden absolute p-4  top-0 bottom-0 bg-gray-900 bg-opacity-90 text-white">
                <div className="flex w-full h-full justify-center items-center">
                  <div>
                    <div className="w-full text-center text-xl">
                      <Para text="Book Name" />
                    </div>
                    <div className="w-full text-center text-sm">
                      <Para text="By:Author Name" />
                    </div>
                    <div className="text-sm pt-2">
                      <Para text="Some description about the book will be added here" />
                    </div>
                    <div>
                      <Button variant="contained" style={{width:"100%", marginTop: "3em"}} color="primary" onClick={handleBuy}  size="medium">Buy Book</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* single book card full width end */}

            {/* single book card full width */}
            <div className="book-card w-full lg:w-3/12 xl:w-3/12 2xl:w-3/12 mb-4 lg:mb-0 xl:mb-0 2xl:mb-0 relative bg-white cursor-pointer">
              <Card src={Book} heading="Book Name" />
              <div className="description hidden absolute p-4  top-0 bottom-0 bg-gray-900 bg-opacity-90 text-white">
                <div className="flex w-full h-full justify-center items-center">
                  <div>
                    <div className="w-full text-center text-xl">
                      <Para text="Book Name" />
                    </div>
                    <div className="w-full text-center text-sm">
                      <Para text="By:Author Name" />
                    </div>
                    <div className="text-sm pt-2">
                      <Para text="Some description about the book will be added here" />
                    </div>
                    <div>
                      <Button variant="contained" style={{width:"100%", marginTop: "3em"}} color="primary" onClick={handleBuy}  size="medium">Buy Book</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* single book card full width end */}
            {/* single book card full width */}
            <div className="book-card w-full lg:w-3/12 xl:w-3/12 2xl:w-3/12 mb-4 lg:mb-0 xl:mb-0 2xl:mb-0 relative bg-white cursor-pointer">
              <Card src={Book2} heading="Book Name" />
              <div className="description hidden absolute p-4  top-0 bottom-0 bg-gray-900 bg-opacity-90 text-white">
                <div className="flex w-full h-full justify-center items-center">
                  <div>
                    <div className="w-full text-center text-xl">
                      <Para text="Book Name" />
                    </div>
                    <div className="w-full text-center text-sm">
                      <Para text="By:Author Name" />
                    </div>
                    <div className="text-sm pt-2">
                      <Para text="Some description about the book will be added here" />
                    </div>
                    <div>
                      <Button variant="contained" style={{width:"100%", marginTop: "3em"}} color="primary" onClick={handleBuy}  size="medium">Buy Book</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* single book card full width end */}
          </div>
        </div>
      </div>
      {/* second row of books end */}
      
      {/* third row after img background */}
      <div className="flex justify-center pt-10 pb-2  lg:pb-12 xl:pb-12 2xl:pb-12">
        <div className="w-11/12  xl:w-4/5 2xl:w-2/5">
          <div className="flex flex-col  lg:flex-row xl:flex-row 2xl:flex-row justify-between">
            {/* single book card full width */}
            <div className="book-card mb-4 lg:mb-0 xl:mb-0 2xl:mb-0 w-full lg:w-1/6 xl:w-1/6 2xl:w-1/6 relative bg-gray-200 cursor-pointer">
              <Card src={Book} heading="Book Name" />
              <div className="description hidden absolute p-4  top-0 bottom-0 bg-gray-900 bg-opacity-90 text-white">
                <div className="flex w-full h-full justify-center items-center">
                  <div>
                    <div className="w-full text-center text-xl">
                      <Para text="Book Name" />
                    </div>
                    <div className="w-full text-center text-sm">
                      <Para text="By:Author Name" />
                    </div>
                    <div className="text-sm pt-2">
                      <Para text="Some description about the book will be added here" />
                    </div>
                    <div>
                      <Button variant="contained" style={{width:"100%", marginTop: "3em"}} color="primary" onClick={handleBuy}  size="medium">Buy Book</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* single book card full width end */}

            {/* single book card full width */}
            <div className="book-card mb-4 lg:mb-0 xl:mb-0 2xl:mb-0 w-full lg:w-1/6 xl:w-1/6 2xl:w-1/6 relative bg-gray-200 cursor-pointer">
              <Card src={Book} heading="Book Name" />
              <div className="description hidden absolute p-4  top-0 bottom-0 bg-gray-900 bg-opacity-90 text-white">
                <div className="flex w-full h-full justify-center items-center">
                  <div>
                    <div className="w-full text-center text-xl">
                      <Para text="Book Name" />
                    </div>
                    <div className="w-full text-center text-sm">
                      <Para text="By:Author Name" />
                    </div>
                    <div className="text-sm pt-2">
                      <Para text="Some description about the book will be added here" />
                    </div>
                    <div>
                      <Button variant="contained" style={{width:"100%", marginTop: "3em"}} color="primary" onClick={handleBuy}  size="medium">Buy Book</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* single book card full width end */}
            {/* single book card full width */}
            <div className="book-card w-full mb-4 lg:mb-0 xl:mb-0 2xl:mb-0 lg:w-1/6 xl:w-1/6 2xl:w-1/6 relative bg-gray-200 cursor-pointer">
              <Card src={Book2} heading="Book Name" />
              <div className="description hidden absolute p-4  top-0 bottom-0 bg-gray-900 bg-opacity-90 text-white">
                <div className="flex w-full h-full justify-center items-center">
                  <div>
                    <div className="w-full text-center text-xl">
                      <Para text="Book Name" />
                    </div>
                    <div className="w-full text-center text-sm">
                      <Para text="By:Author Name" />
                    </div>
                    <div className="text-sm pt-2">
                      <Para text="Some description about the book will be added here" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* single book card full width end */}
            {/* single book card full width */}
            <div className="book-card w-full mb-4 lg:mb-0 xl:mb-0 2xl:mb-0 lg:w-1/6 xl:w-1/6 2xl:w-1/6 relative bg-gray-200 cursor-pointer">
              <Card src={Book} heading="Book Name" />
              <div className="description hidden absolute p-4  top-0 bottom-0 bg-gray-900 bg-opacity-95 text-white">
                <div className="flex w-full h-full justify-center items-center">
                  <div>
                    <div className="w-full text-center text-xl">
                      <Para text="Book Name" />
                    </div>
                    <div className="w-full text-center text-sm">
                      <Para text="By:Author Name" />
                    </div>
                    <div className="text-sm pt-2">
                      <Para text="Some description about the book will be added here" />
                    </div>
                    <div>
                      <Button variant="contained" style={{width:"100%", marginTop: "3em"}} color="primary" onClick={handleBuy}  size="medium">Buy Book</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* single book card full width end */}
            {/* single book card full width */}
            <div className="book-card mb-4 lg:mb-0 xl:mb-0 2xl:mb-0 w-full lg:w-1/6 xl:w-1/6 2xl:w-1/6 relative bg-gray-200 cursor-pointer">
              <Card src={Book2} heading="Book Name" />
              <div className="description hidden absolute p-4  top-0 bottom-0 bg-gray-900 bg-opacity-90 text-white">
                <div className="flex w-full h-full justify-center items-center">
                  <div>
                    <div className="w-full text-center text-xl">
                      <Para text="Book Name" />
                    </div>
                    <div className="w-full text-center text-sm">
                      <Para text="By:Author Name" />
                    </div>
                    <div className="text-sm pt-2">
                      <Para text="Some description about the book will be added here" />
                    </div>
                    <div>
                      <Button variant="contained" style={{width:"100%", marginTop: "3em"}} color="primary" onClick={handleBuy}  size="medium">Buy Book</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* single book card full width end */}
          </div>
        </div>
      </div>
      {/* first Row of books ends */}
      {/* third row after img end */}
      {/* last row of white bg books */}
      <div className="flex justify-center pt-2  lg:pt-10 xl:pt-10 2xl:pt-10 pb-12">
        <div className="w-11/12  xl:w-4/5 2xl:w-2/5">
          <div className="flex flex-col  lg:flex-row xl:flex-row 2xl:flex-row justify-between">
            {/* single book card full width */}
            <div className="book-card mb-4 lg:mb-0 xl:mb-0 2xl:mb-0 w-full lg:w-1/6 xl:w-1/6 2xl:w-1/6 relative bg-gray-200 cursor-pointer">
              <Card src={Book} heading="Book Name" />
              <div className="description hidden absolute p-4  top-0 bottom-0 bg-gray-900 bg-opacity-90 text-white">
                <div className="flex w-full h-full justify-center items-center">
                  <div>
                    <div className="w-full text-center text-xl">
                      <Para text="Book Name" />
                    </div>
                    <div className="w-full text-center text-sm">
                      <Para text="By:Author Name" />
                    </div>
                    <div className="text-sm pt-2">
                      <Para text="Some description about the book will be added here" />
                    </div>
                    <div>
                      <Button variant="contained" style={{width:"100%", marginTop: "3em"}} color="primary" onClick={handleBuy}  size="medium">Buy Book</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* single book card full width end */}

            {/* single book card full width */}
            <div className="book-card mb-4 lg:mb-0 xl:mb-0 2xl:mb-0 w-full lg:w-1/6 xl:w-1/6 2xl:w-1/6 relative bg-gray-200 cursor-pointer">
              <Card src={Book} heading="Book Name" />
              <div className="description hidden absolute p-4  top-0 bottom-0 bg-gray-900 bg-opacity-90 text-white">
                <div className="flex w-full h-full justify-center items-center">
                  <div>
                    <div className="w-full text-center text-xl">
                      <Para text="Book Name" />
                    </div>
                    <div className="w-full text-center text-sm">
                      <Para text="By:Author Name" />
                    </div>
                    <div className="text-sm pt-2">
                      <Para text="Some description about the book will be added here" />
                    </div>
                    <div>
                      <Button variant="contained" style={{width:"100%", marginTop: "3em"}} color="primary" onClick={handleBuy}  size="medium">Buy Book</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* single book card full width end */}
            {/* single book card full width */}
            <div className="book-card w-full mb-4 lg:mb-0 xl:mb-0 2xl:mb-0 lg:w-1/6 xl:w-1/6 2xl:w-1/6 relative bg-gray-200 cursor-pointer">
              <Card src={Book2} heading="Book Name" />
              <div className="description hidden absolute p-4  top-0 bottom-0 bg-gray-900 bg-opacity-90 text-white">
                <div className="flex w-full h-full justify-center items-center">
                  <div>
                    <div className="w-full text-center text-xl">
                      <Para text="Book Name" />
                    </div>
                    <div className="w-full text-center text-sm">
                      <Para text="By:Author Name" />
                    </div>
                    <div className="text-sm pt-2">
                      <Para text="Some description about the book will be added here" />
                    </div>
                    <div>
                      <Button variant="contained" style={{width:"100%", marginTop: "3em"}} color="primary" onClick={handleBuy}  size="medium">Buy Book</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* single book card full width end */}
            {/* single book card full width */}
            <div className="book-card w-full mb-4 lg:mb-0 xl:mb-0 2xl:mb-0 lg:w-1/6 xl:w-1/6 2xl:w-1/6 relative bg-gray-200 cursor-pointer">
              <Card src={Book} heading="Book Name" />
              <div className="description hidden absolute p-4  top-0 bottom-0 bg-gray-900 bg-opacity-95 text-white">
                <div className="flex w-full h-full justify-center items-center">
                  <div>
                    <div className="w-full text-center text-xl">
                      <Para text="Book Name" />
                    </div>
                    <div className="w-full text-center text-sm">
                      <Para text="By:Author Name" />
                    </div>
                    <div className="text-sm pt-2">
                      <Para text="Some description about the book will be added here" />
                    </div>
                    <div>
                      <Button variant="contained" style={{width:"100%", marginTop: "3em"}} color="primary" onClick={handleBuy}  size="medium">Buy Book</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* single book card full width end */}
            {/* single book card full width */}
            <div className="book-card mb-4 lg:mb-0 xl:mb-0 2xl:mb-0 w-full lg:w-1/6 xl:w-1/6 2xl:w-1/6 relative bg-gray-200 cursor-pointer">
              <Card src={Book2} heading="Book Name" />
              <div className="description hidden absolute p-4  top-0 bottom-0 bg-gray-900 bg-opacity-90 text-white">
                <div className="flex w-full h-full justify-center items-center">
                  <div>
                    <div className="w-full text-center text-xl">
                      <Para text="Book Name" />
                    </div>
                    <div className="w-full text-center text-sm">
                      <Para text="By:Author Name" />
                    </div>
                    <div className="text-sm pt-2">
                      <Para text="Some description about the book will be added here" />
                    </div>
                    <div>
                      <Button variant="contained" style={{width:"100%", marginTop: "3em"}} color="primary" onClick={handleBuy}  size="medium">Buy Book</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* single book card full width end */}
          </div>
        </div>
      </div>
      {/* first Row of books ends */}
      {/* last row of white bg end */}
      <Footer />
      <Chatboot />
    </>
  );
}

export default Books;
