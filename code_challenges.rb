# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# I want to loop through the elements within the beverages array and look inside the words if that specific character is in there.
# In ruby I know that there is a method that filters out things called select
# while using the select method I can also use the include method to see if that specific character is in the given words
# because ruby has an implicit return I don't need to use the keyword return

def beverages(array, letter)
    array.select { |value| value.include?(letter)}
end

# p beverages(beverages_array, letter_o);
# p beverages(beverages_array, letter_t);



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# I want to look through the characters in the single string and check for vowels
# I think there is a specific method in ruby that would allow us to do that
# After doing some research on google I found the method delete which we could pass in vowels as arguments

def delete_vowels string
    string.delete('aeiouAEIOU');
end

# p delete_vowels album1
# p delete_vowels album2
# p delete_vowels album3



# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike 
    attr_reader :model, :wheels, :current_speed
    def initialize(model) 
       @model = model
       @wheels = 2
       @current_speed = 0
    end

    def get_info
      p "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end  

    def go_faster
        p @current_speed += 10
    end

    def brake
        if @current_speed <= 0
          p "you are already at #{@current_speed}"
        else
          p @current_speed -= 10  
        end
    end

end

bmx_bike = Bike.new('BMX');
bmx_bike.get_info
bmx_bike.go_faster
bmx_bike.go_faster
bmx_bike.get_info
bmx_bike.brake
bmx_bike.brake
bmx_bike.brake





# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
