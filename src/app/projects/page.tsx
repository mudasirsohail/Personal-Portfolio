import Header from "../components/header";
import Link from "next/link";

export default function Projects(){
    return(
        <div>
            <Header/>
            <h1> Projects </h1>
        <div className="parentPicture">
            <div> 
                <img src="calculator.jpg" alt="calculator" className="leftpicture" /> 
                <a href="https://github.com/mudasirsohail/Calculator-using-inquirer-TS.git" className="left"> Calculator </a>
            </div>
            <div>
                <img src="noguessinggame.png" alt="NumbeeGuessingGame" className="centerpicture"/>
                < a href="https://github.com/mudasirsohail/Typescript-Number-Guessing-Game-.git" className="center">Number Guessing</a>
            </div>
            <div>
            <img src="ATM.png" alt="ATM Machine" className="rightpicture" />
            <a href="https://github.com/mudasirsohail/ATM-Machine-Project.git" className="right"> ATM Machine</a>
            </div>
        </div>
        <div className="parentPicture">
            <div> 
            <img src="TodoList.png" alt="TodoList" className="leftpicture"/>
            <a href="https://github.com/mudasirsohail/A-Todo-List-Project.git" className="left">Todo List</a>
            </div>
            <div >
            <img src="CurrencyConverter.png" alt="Currency Converter" className="centerpicture" />
            <a href="https://github.com/mudasirsohail/Currency-Converter.git" className="center"> Currency Converter </a>
            </div>
            <div>
            <img src="WordCounter.png" alt="Word Counter" className="rightpicture"/>
            <a href="https://github.com/mudasirsohail/Word-Counter.git" className="right"> Word Counter </a>
            </div>
        </div>
        <div className="parentPicture">
            <div> 
            <img src="StudentManagementSystem.png" alt="Student Management System" className="leftpicture" />   
            <a href="https://github.com/mudasirsohail/Student-Management-System.git" className="left"> Student Management </a>
            </div>
            <div >
            
            </div>
            <div>

            </div>
        </div>
        </div>
    )
}