import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as productServices from "../src/services/productServices";
import ProductsCard from '../components/Products/ProductsCard';

const ProductCategories = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [products, setProducts] = useState([]);

    const fetchProductFromServer = useCallback(async () => {
        try {
            const cate = route.params.categoryName.toLowerCase(); // Sửa 'toLowercase' thành 'toLowerCase'
            const fetchData = await productServices.getProductsByCate(cate);
            setProducts(fetchData.products);
        } catch (err) {
            console.error(err);
            setError("Có lỗi xảy ra khi lấy sản phẩm.");
        }
    }, [route.params.categoryName]); 

    //get product details
    useEffect(() => {
        //find product details
        fetchProductFromServer();
    }, [route.params.categoryName])

    // Cập nhật tiêu đề tab khi component được hiển thị
    useEffect(() => {
        if (route.params?.categoryName) {
            navigation.setOptions({ title: route.params.categoryName });
        }
    }, [route.params?.categoryName, navigation]);

    const renderItem = ({ item }) => (
        <View style={styles.cardContainer}>
            <ProductsCard p={item} />
        </View>
    );

    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => item._id}
                numColumns={2}
                columnWrapperStyle={styles.container}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        height: 700,

        paddingBottom: 150
    },
    container: {
        justifyContent: "space-around",
    },
    cardContainer: {
        width: "48%", // Mỗi thẻ chiếm 48% màn hình
        marginBottom: 10,
    },
});

export default ProductCategories;
