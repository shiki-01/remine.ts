import {Routes, Route, Link} from "react-router-dom";
import {NextUIProvider} from "@nextui-org/react";
import Setting from "./pages/Setting";
import NewRemined from "./pages/NewRemined";
import NotFound from "./pages/NotFound";

import {Card, CardBody, Button} from "@nextui-org/react";

import {Settings} from 'lucide-react';

function App() {

    return (
        <>
            <NextUIProvider>
                <Link to="/setting"
                      className={"flex items-center justify-center text-primary-500 dark:text-primary-400"}>
                    <Button isIconOnly color="danger" aria-label="Like">
                        <Settings/>
                    </Button>
                </Link>
                <Routes>
                    <Route path="/" element={<NewRemined/>}/>
                    <Route path="/setting" element={<Setting/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </NextUIProvider>
        </>
    )
}

export default App;
