import com.phoneApp.app.Phone
import com.phoneApp.app.PhoneDetail

import groovy.json.JsonSlurper
import groovy.io.FileType
import org.codehaus.groovy.grails.commons.ApplicationHolder

def slurper = new JsonSlurper()
FileReader reader = new FileReader("phones.json")
def phones = slurper.parse(reader)
def jsonFolder = 'phones-data'
def dir = new File(jsonFolder)
dir.traverse(
        type:FileType.FILES,
        nameFilter:~/.*\.json/) {
    def details = slurper.parseText(it.text)
    phones.each {jsonPhone ->
        if(jsonPhone.id == details.id){
            def phone = new Phone(name:jsonPhone.name, age:jsonPhone.age,
                                snippet:jsonPhone.snippet, imageUrl:jsonPhone.imageUrl)
            def phoneDetail = new PhoneDetail(details: details)
            phone.phoneDetails = phoneDetail
            phone.save()
        }
    }
}