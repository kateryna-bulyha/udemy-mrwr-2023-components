import Button from "../components/Button";
import { GoBell, GoCodeOfConduct, GoDatabase } from 'react-icons/go';


function ButtonPage () {
    return <div>
        <div>
            <Button 
            secondary 
            outline 
            rounded 
            className='mb-5'>
                <GoBell />
                Click me!
                </Button>
        </div>
        <div>
            <Button 
            danger 
            outline>
                <GoCodeOfConduct />
                Buy now!
                </Button>
        </div>
        <div>
            <Button 
            warning>
                <GoDatabase />
                See Deal!
                </Button>
        </div>
        <div>
            <Button 
            secondary 
            outline>
                Hide Ads!
                </Button>
        </div>
        <div>
            <Button 
            primary 
            rounded>
                Surprise!
                </Button>
        </div> 
    </div>
}

export default ButtonPage;