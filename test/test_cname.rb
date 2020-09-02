require 'test/unit'

module Test
  class TestCName < Test::Unit::TestCase

    PRODUCTION_HOST = "developer.edmunds.com"

    def test_cname
      file = File.open("CNAME")
      cname = file.read.gsub(/\s+/, "")
      file.close

      assert(cname == PRODUCTION_HOST, "CNAME is not valid")
    end

  end
end
