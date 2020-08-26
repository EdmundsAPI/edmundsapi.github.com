require 'test/unit'

module Test
  class TestCName < Test::Unit::TestCase

    PRODUCTION_REPOSITORY = "edmundsapi.github.com"

    def test_cname
      repository = `git remote -v`

      file = File.open("CNAME")
      cname = file.read.gsub(/\s+/, "")
      file.close

      if repository.include? PRODUCTION_REPOSITORY
        verify = cname == "edmundsapi-preprod.github.io"
      else
        verify = repository.include? cname
      end
      assert(verify, "CNAME is not valid")
    end

  end
end