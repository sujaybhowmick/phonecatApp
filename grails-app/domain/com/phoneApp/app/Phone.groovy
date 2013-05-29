package com.phoneApp.app

class Phone {
    String id
    Integer age
    String imageUrl
    String name
    String snippet
    PhoneDetail phoneDetails

    Map details

    static transients = ['details']

    static constraints = {
    }


    public void setDetails(Map details){
        this.details = details
    }
}
