import React from "react";
import "./hp.css";
import { PageLayout } from "../components/page-layout.js";
import Content from "./content.js";
export function Home(props) {
    return (
        <PageLayout>
            <Content data={props.data} component={props.component} />
        </PageLayout>
    );
}

