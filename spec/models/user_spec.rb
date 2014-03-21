require 'spec_helper'

describe User do
  let(:user) { Fabricate(:user) }
  let(:collaborator) { Fabricate(:user) }
  let(:project) { Fabricate(:project) }
  let(:shared_project) { Fabricate(:project) }

  describe "#all_projects" do

    it "returns users projects and shared_projects" do
      user.projects << project
      collaborator.projects << shared_project
      user.shared_projects << shared_project
      expect(user.all_projects.count).to eq(2)
    end
  end
end
