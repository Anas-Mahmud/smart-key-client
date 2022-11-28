import CategoryCard from '../CategoryCard/CategoryCard';

const ProductCategories = ({ categories }) => {

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Hottest items right now Shop</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We are a small Keyboard company based in Bangladesh. We are keyboard fanatics and like to spread our passion around the globe. </p>
                    </div>
                    <div className="flex flex-wrap justify-evenly">
                        {
                            categories.map(category => <CategoryCard
                                key={category.categoryId}
                                category={category}
                            ></CategoryCard>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductCategories;