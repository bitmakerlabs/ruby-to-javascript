
## Warm up

Convert the following pieces of Ruby code to JavaScript.

```ruby
apples = 14
puts apples

puts "I have #{apples} apples."
```

```ruby
materials = ['wood', 'metal', 'stone']
words = {
  'elephant' => "The world's largest land mammal.",
  'school' => 'A place of learning.',
  'ice cream' => 'A delicious milk-based dessert.',
}
```

```ruby
num = 16
if num > 10
  puts "#{num} is greater than 10."
elsif num == 10
  puts "#{num} is exactly 10."
else
  puts "#{num} must be less than 10."
end
```

```ruby
10.times do
  puts "Doing the same thing over and over."
end
```

```ruby
base = 5
20.times do |num|
  puts num + base
end
```

```ruby
total = 0
100.times do |num|
  total += num
end
puts total
```

```ruby
(3..15).each do |height|
  if height > 9
    puts "You can get on the rollercoaster!"
  else
    puts "You are too short to ride this rollercoaster."
  end
end
```

```ruby
containers = ['purse', 'wallet', 'backback']
containers.each do |container|
  puts container
end
```

```ruby
def hello_world
  puts "Hello world!"
end

hello_world
```

```ruby
def add(first_num, second_num)
  first_num + second_num
end

amount = add(5, 7)
puts amount
```


## Convert a Working Program

Open the file `autopilot.rb` and run it. Then make a new file called `autopilot.js` and attempt to reproduce it in JavaScript.

> #### Hint
Make sure to run and test your file as you go! You do *not* want to write the entire file and hope for the best. Remember that you can run `node` in your terminal, much like `irb`. Work on one function at a time. You want to be confident that the function is working before you move on.
