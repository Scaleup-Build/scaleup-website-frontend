import { useState } from "react";
import { ChevronDown, X, User } from "lucide-react";
import Footer from "../components/Footer";

const skillOptions = [
  "Software engineering",
  "UI/UX Design",
  "Operations/Product management",
  "Marketing and media",
  "Data Science",
  "DevOps",
  "Content Writing",
];

const ApplicationDetails = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    availability: "",
    whyVolunteer: "",
    experience: "",
    cv: "",
  });

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const [selectedVolunteerSkills, setSelectedVolunteerSkills] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const removeSkill = (skill) => {
    setSelectedSkills((prev) => prev.filter((s) => s !== skill));
  };

  const toggleAvailability = (skill) => {
    setSelectedAvailability((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const toggleVolunteerSkill = (skill) => {
    setSelectedVolunteerSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ formData, selectedSkills, selectedAvailability, selectedVolunteerSkills });
  };

  const inputBase =
    "w-full border border-gray-300 rounded-lg px-4 py-3 text-sm font-[Poppins] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#193A84] focus:ring-1 focus:ring-[#193A84] transition-colors";

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-[Poppins]">
      {/* Header */}
      <div className="pt-10 pb-6 px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-10 h-10 bg-[#193A84] rounded-lg flex items-center justify-center">
            <span className="text-white font-extrabold text-xl">S</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-[#193A84]">
            ScaleUp
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Application Details
        </h1>
        <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto">
          We're excited to learn more about you. All information shared is
          handled responsibly.
        </p>
      </div>

      {/* Form */}
      <div className="flex-1 flex justify-center px-4 md:px-6 pb-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10"
        >
          {/* First Name + Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                First Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Benedicta"
                  className={inputBase}
                />
                <User
                  size={16}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Last Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Atagamen"
                  className={inputBase}
                />
                <User
                  size={16}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="enteryouremail@gmail.com"
              className={inputBase}
            />
          </div>

          {/* Phone Number */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Phone Number (whatsapp)
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder=""
              className={inputBase}
            />
          </div>

          {/* Location */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Lagos"
              className={inputBase}
            />
          </div>

          {/* LinkedIn */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              LinkedIn <span className="text-gray-400">(compulsory)</span>
            </label>
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="link"
              className={inputBase}
            />
          </div>

          {/* Volunteer Skills */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Volunteer Skills
            </label>
            <div
              className="border border-gray-300 rounded-lg px-4 py-3 cursor-pointer flex items-center justify-between flex-wrap gap-2"
              onClick={() => setSkillsOpen(!skillsOpen)}
            >
              <div className="flex flex-wrap gap-2 flex-1">
                {selectedSkills.length === 0 && (
                  <span className="text-sm text-gray-400">
                    Select skills...
                  </span>
                )}
                {selectedSkills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 bg-[#193A84] text-white text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeSkill(skill);
                      }}
                      className="hover:text-white/70"
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))}
              </div>
              <ChevronDown
                size={18}
                className={`text-gray-400 transition-transform ${
                  skillsOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {skillsOpen && (
              <div className="mt-1 border border-gray-200 rounded-lg bg-white shadow-md max-h-48 overflow-y-auto">
                {skillOptions.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => toggleSkill(skill)}
                    className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 flex items-center gap-3 ${
                      selectedSkills.includes(skill)
                        ? "text-[#193A84] font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center text-xs ${
                        selectedSkills.includes(skill)
                          ? "bg-[#193A84] border-[#193A84] text-white"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedSkills.includes(skill) && "✓"}
                    </div>
                    {skill}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Availability + Checkbox list */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Availability (hours per week)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                placeholder="20 hrs"
                className={inputBase}
              />
              <div className="border border-gray-200 rounded-lg p-3 max-h-44 overflow-y-auto">
                {skillOptions.map((skill) => (
                  <label
                    key={skill}
                    className="flex items-center gap-3 py-1.5 cursor-pointer"
                  >
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center text-xs shrink-0 ${
                        selectedAvailability.includes(skill)
                          ? "bg-[#193A84] border-[#193A84] text-white"
                          : "border-gray-300"
                      }`}
                      onClick={() => toggleAvailability(skill)}
                    >
                      {selectedAvailability.includes(skill) && "✓"}
                    </div>
                    <span className="text-sm text-gray-700">{skill}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Why do you want to volunteer? + Checkbox list */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Why do you want to volunteer?
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <textarea
                name="whyVolunteer"
                value={formData.whyVolunteer}
                onChange={handleChange}
                placeholder="short note"
                rows={4}
                className={`${inputBase} resize-none`}
              />
              <div className="border border-gray-200 rounded-lg p-3 max-h-44 overflow-y-auto">
                {skillOptions.map((skill) => (
                  <label
                    key={skill}
                    className="flex items-center gap-3 py-1.5 cursor-pointer"
                  >
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center text-xs shrink-0 ${
                        selectedVolunteerSkills.includes(skill)
                          ? "bg-[#193A84] border-[#193A84] text-white"
                          : "border-gray-300"
                      }`}
                      onClick={() => toggleVolunteerSkill(skill)}
                    >
                      {selectedVolunteerSkills.includes(skill) && "✓"}
                    </div>
                    <span className="text-sm text-gray-700">{skill}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Relevant experience */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Relevant experience
            </label>
            <input
              type="url"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="link"
              className={inputBase}
            />
          </div>

          {/* Upload CV */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Upload CV <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="url"
              name="cv"
              value={formData.cv}
              onChange={handleChange}
              placeholder="link"
              className={inputBase}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#193A84] text-white font-semibold text-base py-3.5 rounded-lg hover:bg-[#142e6b] transition-colors cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ApplicationDetails;
