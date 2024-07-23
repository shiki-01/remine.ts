import { Routes, Route } from "react-router-dom";
import {NextUIProvider} from "@nextui-org/react";
import Setting from "./pages/Setting";
import NewRemined from "./pages/NewRemined";
import NotFound from "./pages/NotFound";

import {Card, CardBody, Image, Button, Slider} from "@nextui-org/react";

function App() {

    return (
        <>
            <NextUIProvider>
                <Card
                    isBlurred
                    className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
                    shadow="sm"
                >
                    <CardBody>
                        <Routes>
                            <Route path="/" element={<NewRemined />} />
                            <Route path="/setting" element={<Setting />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </CardBody>
                </Card>
            </NextUIProvider>
        </>
    )
}

export default App;
