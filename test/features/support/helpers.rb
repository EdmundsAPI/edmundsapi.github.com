class String
  def to_arr
    res = Array.new
    self.split(", ").each do |item|
      res.push item.gsub(/'/, '')
    end
    return res
  end
end