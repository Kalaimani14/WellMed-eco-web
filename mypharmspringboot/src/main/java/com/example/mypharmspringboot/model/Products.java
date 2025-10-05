package com.example.mypharmspringboot.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Setter;
import lombok.Getter;

@Setter
@Getter

@Entity
@Table(name="products")
public class Products {
   
    @Id
    @Column(name ="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    @Column(name="productname")
    private String productname;

    @Column(name = "imgurl")
    private String imgurl;
    
    @Column(name = "category")
    private String category;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "actualprice")
    private int actualprice;

    @Column(name = "discountprice")
    private int discountprice;

    @Column(name = "order")
    private int order;

    @Column(name="addedtocard")
    private int addedtocard;

}
