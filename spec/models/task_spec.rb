require 'spec_helper'

describe Task do

  let(:task) { Task.new }

  describe "#action" do
    it "is 'start' when status is nil" do
      expect(task.action).to eq('start')
    end

    it "is 'finish' when status is 'started'" do
      task.status = 'started'
      expect(task.action).to eq('finish')
    end
  end
end
