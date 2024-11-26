import Layout from "../../components/layout/Layout";
import FoodNutritionComponent from "@/components/pages/food-nutrition";
import Head from "next/head";

const FoodNutrition = () => {
  return (
    <Layout>
      <Head>
        <title>Các loại thức ăn</title>
      </Head>
      <FoodNutritionComponent />
    </Layout>
  );
};

export default FoodNutrition;
