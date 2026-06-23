import React from "react";
import Section from "../../components/section";
import jsonData from '../../data.json';

export type Metadata = {
    icon: string;
    title: string;
    section: string;
};

const filterBySection = (sectionName: string) => (
                                ({ section }:any) => (section == sectionName ) );

const mapToSectionEl = ({ icon, title, section }: Metadata) => (<>
    <div className={`${section}-section col-12 p-0 m-0 pipeline-roadmap`}>
        <span className="pipeline-roadmap__pin" />

        <div className="pipeline-roadmap__content">
            <Section
                data={jsonData.filter(filterBySection(section))}
                icon={icon}
                title={title}
            />
        </div>
    </div>
</>);

export default (metadata: Metadata[]) => (<>

    {metadata
        .filter(({section}) => (section!=='connect'))
        .map( mapToSectionEl )
    }

</>);