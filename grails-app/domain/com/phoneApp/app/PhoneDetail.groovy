package com.phoneApp.app

class PhoneDetail {
    String id
    Map details

    static belongsTo = [phone: Phone]

    static constraints = {
    }
}
