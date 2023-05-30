import React from "react";
import MainCard from "./MainCard";
import Card from "./Card";

import Header from "../../Components/Header";

function Index({ articles }) {
    console.log(articles);
    return (
        <div className="flex h-screen flex-col">
            <Header />

            <div className="flex flex-col items-center md:flex-row pt-16 pl-4">
                <MainCard
                    imageUrl="/images/top_background.jpg"
                    title="Example Card"
                    description="This is an example card description."
                />
                <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black-100">
                            Article
                        </h1>
                        <p className="text-balck-100 mt-4 sm:mt-6">
                            ~ based on your participation ~
                        </p>
                    </div>
                </div>
            </div>
            <p className="text-right text-black-100 mt-2 pt-8 pr-5">
                ＞＞＞ Check All Events
            </p>

            <div className="flex flex-wrap justify-center items-center mt-8">
                {articles.map((article) => (
                    <Card
                        key={article.a_id}
                        imageUrl={article.imagePath}
                        title={article.title}
                        description={article.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default Index;
