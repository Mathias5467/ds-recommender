"use client";

import { useState } from "react";
import { structures, Language, SizeType, Complexity, FilterComplexity, Ordering } from './types'
import { Search, Database, Layers, CheckCircle, Info, ExternalLink, Clock, PlusCircle, Trash2, Code2 } from "lucide-react";
import rawStructuresData from "@/data/structures_data.json";
import CustomDropdown from "./components/CustomDropdown";



export default function Home() {
  const [lang, setLang] = useState<Language>("C++");
  const [isKeyValue, setIsKeyValue] = useState(false);
  const [sizeType, setSizeType] = useState<SizeType>("Dynamic");
  const [allowDuplicates, setAllowDuplicates] = useState(true);
  const [reqOrdering, setReqOrdering] = useState<Ordering | "Any">("Any");

  const [reqSearch, setReqSearch] = useState<FilterComplexity>("Any");
  const [reqInsert, setReqInsert] = useState<FilterComplexity>("Any");
  const [reqDelete, setReqDelete] = useState<FilterComplexity>("Any");

  const orderingOptions = [
    { value: "Any", label: "Any Behavior" },
    { value: "Insertion Order", label: "Maintains Insertion Order (Arrays, Lists)" },
    { value: "Unordered (Hash)", label: "Unordered / Hash Table (Fastest Lookups)" },
    { value: "Sorted (Tree)", label: "Automatically Sorted (Red-Black Trees)" },
    { value: "Priority (Heap)", label: "Priority Access / Min-Max (Heaps)" },
    { value: "LIFO (Stack)", label: "Last-In-First-Out (Stacks)" },
    { value: "FIFO (Queue)", label: "First-In-First-Out (Queues)" }
  ];

  const filteredStructures = structures.filter((s) => {
    if (s.lang !== lang) return false;
    if (s.keyValue !== isKeyValue) return false;
    if (s.size !== sizeType) return false;
    
    if (!isKeyValue && s.duplicates !== allowDuplicates) return false;
    
    if (reqOrdering !== "Any" && s.ordering !== reqOrdering) return false;

    if (reqSearch !== "Any" && s.complexities.search !== reqSearch) return false;
    if (reqInsert !== "Any" && s.complexities.insert !== reqInsert) return false;
    if (reqDelete !== "Any" && s.complexities.delete !== reqDelete) return false;

    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* HEADER */}
        <header className="text-center space-y-4">
          <div className="flex gap-5 justify-center items-center">
            <Database className="w-20 h-20 text-emerald-500" />
            <h1 className="text-3xl xl:text-5xl md:text-4xl text-left font-extrabold text-slate-900">
              Data Structure Recommender
            </h1>
          </div>
          <p className="hidden sm:block text-lg text-slate-600 mx-auto">
            Select your algorithmic requirements to find the perfect structure for your language.
          </p>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          
          <div className="xl:col-span-4 space-y-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 h-fit">
            
            <div className="space-y-6">
              <h2 className="text-xl font-bold border-b pb-2 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-emerald-500" />
                Data Model
              </h2>

              <div className="space-y-2">
                <label className="font-semibold text-sm text-slate-700">Programming Language</label>
                <div className="flex flex-wrap gap-2">
                  {(["Python", "Java", "C++", "C#", "JavaScript"] as Language[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className={`px-3 py-1.5 cursor-pointer rounded-lg text-sm font-medium transition-all ${
                        lang === l ? "bg-gradient-to-tr from-cyan-500 to-emerald-500 text-white shadow-md" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-semibold text-sm text-slate-700">Data Type</label>
                <div className="flex bg-slate-100 p-1 rounded-lg">
                  <button onClick={() => setIsKeyValue(false)} className={`flex-1 cursor-pointer py-1.5 text-sm rounded-md transition-all ${!isKeyValue ? "bg-white shadow-sm font-bold text-emerald-500" : "text-slate-500"}`}>Single Values</button>
                  <button onClick={() => setIsKeyValue(true)} className={`flex-1 cursor-pointer py-1.5 text-sm rounded-md transition-all ${isKeyValue ? "bg-white shadow-sm font-bold text-emerald-500" : "text-slate-500"}`}>Key : Value Pairs</button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-semibold text-sm text-slate-700">Capacity</label>
                <div className="flex bg-slate-100 p-1 rounded-lg">
                  <button onClick={() => setSizeType("Dynamic")} className={`flex-1 cursor-pointer py-1.5 text-sm rounded-md transition-all ${sizeType === "Dynamic" ? "bg-white shadow-sm font-bold text-emerald-500" : "text-slate-500"}`}>Dynamic (Grows)</button>
                  <button onClick={() => setSizeType("Fixed")} className={`flex-1 cursor-pointer py-1.5 text-sm rounded-md transition-all ${sizeType === "Fixed" ? "bg-white shadow-sm font-bold text-emerald-500" : "text-slate-500"}`}>Fixed (Static)</button>
                </div>
              </div>

              {!isKeyValue && (
                <div className="space-y-2">
                  <label className="font-semibold text-sm text-slate-700">Duplicates Allowed?</label>
                  <div className="flex bg-slate-100 p-1 rounded-lg">
                    <button onClick={() => setAllowDuplicates(true)} className={`flex-1 cursor-pointer py-1.5 text-sm rounded-md transition-all ${allowDuplicates ? "bg-white shadow-sm font-bold text-emerald-500" : "text-slate-500"}`}>Yes</button>
                    <button onClick={() => setAllowDuplicates(false)} className={`flex-1 cursor-pointer py-1.5 text-sm rounded-md transition-all ${!allowDuplicates ? "bg-white shadow-sm font-bold text-emerald-500" : "text-slate-500"}`}>No (Unique)</button>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="font-semibold text-sm text-slate-700 flex items-center gap-2">
                  <Layers className="w-4 h-4" /> Internal Behavior & Ordering
                </label>
                <CustomDropdown 
                    options={orderingOptions}
                    value={reqOrdering}
                    onChange={(val) => setReqOrdering(val as Ordering | "Any")}
                />
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Clock className="w-5 h-5 text-rose-500" />
                Time Complexity (Big O)
              </h2>

              {(() => {
                const complexityOptions = [
                  { value: "Any", label: "Any Complexity" },
                  { value: "O(1)", label: "O(1) - Constant (Instant)" },
                  { value: "O(log n)", label: "O(log n) - Logarithmic (Fast)" },
                  { value: "O(n)", label: "O(n) - Linear (Slow)" }
                ];

                return [
                  { label: "Search / Find", state: reqSearch, setter: setReqSearch, icon: <Search className="w-4 h-4"/> },
                  { label: "Insert", state: reqInsert, setter: setReqInsert, icon: <PlusCircle className="w-4 h-4"/> },
                  { label: "Delete", state: reqDelete, setter: setReqDelete, icon: <Trash2 className="w-4 h-4"/> }
                ].map((filter, idx) => (
                  <div key={idx} className="space-y-1">
                    <label className="font-semibold text-sm text-slate-700 flex items-center gap-1">
                      {filter.icon} {filter.label}
                    </label>
                    
                    <CustomDropdown 
                      options={complexityOptions}
                      value={filter.state}
                      onChange={(val) => filter.setter(val as FilterComplexity)}
                    />
                  </div>
                ));
              })()}
            </div>

          </div>

          <div className="xl:col-span-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-emerald-500" />
                Recommended Structures ({filteredStructures.length})
              </h2>
            </div>

            {filteredStructures.length === 0 ? (
              <div className="bg-amber-50 border border-amber-200 text-amber-800 p-6 rounded-xl flex items-start gap-4">
                <Info className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">No match found</h3>
                  <p className="text-amber-700 mt-1">
                    Your combination of filters does not natively exist in this language. For example, JavaScript lacks built-in Heaps/Priority Queues, and Python lacks strict built-in Linked Lists. Try relaxing the Big O constraints or changing languages.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-1">
                {filteredStructures.map((ds) => (
                  <div key={ds.id} className="bg-white border border-slate-200 hover:scale-102 transition-all duration-300 rounded-2xl p-6 shadow-sm group relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
                    
                    <div className="flex justify-between items-start mb-4 pl-2">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span className="bg-slate-100 text-slate-700 text-xs font-bold px-2 py-1 rounded">
                            {ds.lang}
                          </span>
                          <span className={`text-xs font-bold px-2 py-1 rounded ${
                            ds.ordering === "Unordered (Hash)" ? "bg-purple-100 text-purple-700" :
                            ds.ordering === "Sorted (Tree)" ? "bg-amber-100 text-amber-700" :
                            ds.ordering === "Priority (Heap)" ? "bg-rose-100 text-rose-700" :
                            "bg-blue-100 text-blue-700"
                          }`}>
                            {ds.ordering}
                          </span>
                        </div>
                        <h3 className="text-2xl font-mono font-bold text-slate-900 group-hover:text-emerald-500 transition-colors">
                          {ds.name}
                        </h3>
                      </div>
                      <a href={ds.docUrl} target="_blank" rel="noreferrer" className="text-emerald-500 hover:text-emerald-700 bg-emerald-50 p-2 rounded-full transition-colors flex-shrink-0" title="Official Documentation">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    
                    <p className="text-slate-600 mb-6 pl-2">
                      <strong className="text-slate-800">Best for:</strong> {ds.bestFor}
                    </p>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Clock className="w-4 h-4" /> Average Time Complexity
                      </h4>
                      <div className="grid grid-cols-3 gap-3 mb-3">
                        <div className="bg-white p-3 rounded-lg border border-slate-200 text-center shadow-sm">
                          <div className="text-xs text-slate-500 mb-1 flex justify-center gap-1 items-center"><Search className="w-3 h-3"/> Search</div>
                          <div className={`font-mono font-bold text-lg ${ds.complexities.search === "O(1)" ? "text-emerald-600" : ds.complexities.search === "O(log n)" ? "text-amber-500" : ds.complexities.search === "N/A" ? "text-slate-400" : "text-rose-600"}`}>
                            {ds.complexities.search}
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-slate-200 text-center shadow-sm">
                          <div className="text-xs text-slate-500 mb-1 flex justify-center gap-1 items-center"><PlusCircle className="w-3 h-3"/> Insert</div>
                          <div className={`font-mono font-bold text-lg ${ds.complexities.insert === "O(1)" ? "text-emerald-600" : ds.complexities.insert === "O(log n)" ? "text-amber-500" : ds.complexities.insert === "N/A" ? "text-slate-400" : "text-rose-600"}`}>
                            {ds.complexities.insert}
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-slate-200 text-center shadow-sm">
                          <div className="text-xs text-slate-500 mb-1 flex justify-center gap-1 items-center"><Trash2 className="w-3 h-3"/> Delete</div>
                          <div className={`font-mono font-bold text-lg ${ds.complexities.delete === "O(1)" ? "text-emerald-600" : ds.complexities.delete === "O(log n)" ? "text-amber-500" : ds.complexities.delete === "N/A" ? "text-slate-400" : "text-rose-600"}`}>
                            {ds.complexities.delete}
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 flex items-start gap-2 bg-slate-100 p-2 rounded-lg">
                        <Info className="w-4 h-4 flex-shrink-0 text-slate-400" />
                        <span>{ds.complexityNotes}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}